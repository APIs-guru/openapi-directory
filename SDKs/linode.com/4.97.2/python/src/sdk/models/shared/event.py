from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EventActionEnum(str, Enum):
    ACCOUNT_UPDATE = "account_update"
    ACCOUNT_SETTINGS_UPDATE = "account_settings_update"
    BACKUPS_ENABLE = "backups_enable"
    BACKUPS_CANCEL = "backups_cancel"
    BACKUPS_RESTORE = "backups_restore"
    COMMUNITY_QUESTION_REPLY = "community_question_reply"
    COMMUNITY_LIKE = "community_like"
    CREDIT_CARD_UPDATED = "credit_card_updated"
    DISK_CREATE = "disk_create"
    DISK_DELETE = "disk_delete"
    DISK_UPDATE = "disk_update"
    DISK_DUPLICATE = "disk_duplicate"
    DISK_IMAGIZE = "disk_imagize"
    DISK_RESIZE = "disk_resize"
    DNS_RECORD_CREATE = "dns_record_create"
    DNS_RECORD_DELETE = "dns_record_delete"
    DNS_RECORD_UPDATE = "dns_record_update"
    DNS_ZONE_CREATE = "dns_zone_create"
    DNS_ZONE_DELETE = "dns_zone_delete"
    DNS_ZONE_IMPORT = "dns_zone_import"
    DNS_ZONE_UPDATE = "dns_zone_update"
    ENTITY_TRANSFER_ACCEPT = "entity_transfer_accept"
    ENTITY_TRANSFER_CANCEL = "entity_transfer_cancel"
    ENTITY_TRANSFER_CREATE = "entity_transfer_create"
    ENTITY_TRANSFER_FAIL = "entity_transfer_fail"
    ENTITY_TRANSFER_STALE = "entity_transfer_stale"
    FIREWALL_CREATE = "firewall_create"
    FIREWALL_DELETE = "firewall_delete"
    FIREWALL_DISABLE = "firewall_disable"
    FIREWALL_ENABLE = "firewall_enable"
    FIREWALL_UPDATE = "firewall_update"
    FIREWALL_DEVICE_ADD = "firewall_device_add"
    FIREWALL_DEVICE_REMOVE = "firewall_device_remove"
    HOST_REBOOT = "host_reboot"
    IMAGE_DELETE = "image_delete"
    IMAGE_UPDATE = "image_update"
    IMAGE_UPLOAD = "image_upload"
    IPADDRESS_UPDATE = "ipaddress_update"
    LASSIE_REBOOT = "lassie_reboot"
    LISH_BOOT = "lish_boot"
    LINODE_ADDIP = "linode_addip"
    LINODE_BOOT = "linode_boot"
    LINODE_CLONE = "linode_clone"
    LINODE_CREATE = "linode_create"
    LINODE_DELETE = "linode_delete"
    LINODE_UPDATE = "linode_update"
    LINODE_DELETEIP = "linode_deleteip"
    LINODE_MIGRATE = "linode_migrate"
    LINODE_MIGRATE_DATACENTER = "linode_migrate_datacenter"
    LINODE_MIGRATE_DATACENTER_CREATE = "linode_migrate_datacenter_create"
    LINODE_MUTATE = "linode_mutate"
    LINODE_MUTATE_CREATE = "linode_mutate_create"
    LINODE_REBOOT = "linode_reboot"
    LINODE_REBUILD = "linode_rebuild"
    LINODE_RESIZE = "linode_resize"
    LINODE_RESIZE_CREATE = "linode_resize_create"
    LINODE_SHUTDOWN = "linode_shutdown"
    LINODE_SNAPSHOT = "linode_snapshot"
    LINODE_CONFIG_CREATE = "linode_config_create"
    LINODE_CONFIG_DELETE = "linode_config_delete"
    LINODE_CONFIG_UPDATE = "linode_config_update"
    LKE_NODE_CREATE = "lke_node_create"
    LONGVIEWCLIENT_CREATE = "longviewclient_create"
    LONGVIEWCLIENT_DELETE = "longviewclient_delete"
    LONGVIEWCLIENT_UPDATE = "longviewclient_update"
    MANAGED_DISABLED = "managed_disabled"
    MANAGED_ENABLED = "managed_enabled"
    MANAGED_SERVICE_CREATE = "managed_service_create"
    MANAGED_SERVICE_DELETE = "managed_service_delete"
    NODEBALANCER_CREATE = "nodebalancer_create"
    NODEBALANCER_DELETE = "nodebalancer_delete"
    NODEBALANCER_UPDATE = "nodebalancer_update"
    NODEBALANCER_CONFIG_CREATE = "nodebalancer_config_create"
    NODEBALANCER_CONFIG_DELETE = "nodebalancer_config_delete"
    NODEBALANCER_CONFIG_UPDATE = "nodebalancer_config_update"
    NODEBALANCER_NODE_CREATE = "nodebalancer_node_create"
    NODEBALANCER_NODE_DELETE = "nodebalancer_node_delete"
    NODEBALANCER_NODE_UPDATE = "nodebalancer_node_update"
    OAUTH_CLIENT_CREATE = "oauth_client_create"
    OAUTH_CLIENT_DELETE = "oauth_client_delete"
    OAUTH_CLIENT_SECRET_RESET = "oauth_client_secret_reset"
    OAUTH_CLIENT_UPDATE = "oauth_client_update"
    PASSWORD_RESET = "password_reset"
    PAYMENT_SUBMITTED = "payment_submitted"
    PROFILE_UPDATE = "profile_update"
    STACKSCRIPT_CREATE = "stackscript_create"
    STACKSCRIPT_DELETE = "stackscript_delete"
    STACKSCRIPT_UPDATE = "stackscript_update"
    STACKSCRIPT_PUBLICIZE = "stackscript_publicize"
    STACKSCRIPT_REVISE = "stackscript_revise"
    TAG_CREATE = "tag_create"
    TAG_DELETE = "tag_delete"
    TFA_DISABLED = "tfa_disabled"
    TFA_ENABLED = "tfa_enabled"
    TICKET_ATTACHMENT_UPLOAD = "ticket_attachment_upload"
    TICKET_CREATE = "ticket_create"
    TICKET_UPDATE = "ticket_update"
    TOKEN_CREATE = "token_create"
    TOKEN_DELETE = "token_delete"
    TOKEN_UPDATE = "token_update"
    USER_CREATE = "user_create"
    USER_UPDATE = "user_update"
    USER_DELETE = "user_delete"
    USER_SSH_KEY_ADD = "user_ssh_key_add"
    USER_SSH_KEY_DELETE = "user_ssh_key_delete"
    USER_SSH_KEY_UPDATE = "user_ssh_key_update"
    VLAN_ATTACH = "vlan_attach"
    VLAN_DETACH = "vlan_detach"
    VOLUME_ATTACH = "volume_attach"
    VOLUME_CLONE = "volume_clone"
    VOLUME_CREATE = "volume_create"
    VOLUME_DELETE = "volume_delete"
    VOLUME_UPDATE = "volume_update"
    VOLUME_DETACH = "volume_detach"
    VOLUME_RESIZE = "volume_resize"

class EventEntityTypeEnum(str, Enum):
    ACCOUNT = "account"
    BACKUPS = "backups"
    COMMUNITY = "community"
    DISKS = "disks"
    DOMAIN = "domain"
    ENTITY_TRANSFER = "entity_transfer"
    FIREWALL = "firewall"
    IMAGE = "image"
    IPADDRESS = "ipaddress"
    LINODE = "linode"
    LONGVIEW = "longview"
    MANAGED_SERVICE = "managed_service"
    NODEBALANCER = "nodebalancer"
    OAUTH_CLIENT = "oauth_client"
    PROFILE = "profile"
    STACKSCRIPT = "stackscript"
    TAG = "tag"
    TICKET = "ticket"
    TOKEN = "token"
    USER = "user"
    USER_SSH_KEY = "user_ssh_key"
    VOLUME = "volume"


@dataclass_json
@dataclass
class EventEntity:
    r"""EventEntity
    Detailed information about the Event's entity, including ID, type, label, and URL used to access it.
    
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    type: Optional[EventEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class EventSecondaryEntity:
    r"""EventSecondaryEntity
    Detailed information about the Event's secondary entity, which provides additional information
    for events such as, but not limited to, `linode_boot`, `linode_reboot`, `linode_create`, and `linode_clone` Event actions.
    
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class EventStatusEnum(str, Enum):
    FAILED = "failed"
    FINISHED = "finished"
    NOTIFICATION = "notification"
    SCHEDULED = "scheduled"
    STARTED = "started"


@dataclass_json
@dataclass
class Event:
    r"""Event
    A collection of Event objects. An Event is an action taken against an entity related to your Account. For example, booting a Linode would create an Event.
    The Events returned depends on your grants.
    
    """
    
    action: Optional[EventActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    entity: Optional[EventEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    percent_complete: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent_complete') }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    secondary_entity: Optional[EventSecondaryEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary_entity') }})
    seen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seen') }})
    status: Optional[EventStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    time_remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_remaining') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
