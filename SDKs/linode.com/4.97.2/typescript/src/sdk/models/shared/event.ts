import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EventActionEnum {
    AccountUpdate = "account_update"
,    AccountSettingsUpdate = "account_settings_update"
,    BackupsEnable = "backups_enable"
,    BackupsCancel = "backups_cancel"
,    BackupsRestore = "backups_restore"
,    CommunityQuestionReply = "community_question_reply"
,    CommunityLike = "community_like"
,    CreditCardUpdated = "credit_card_updated"
,    DiskCreate = "disk_create"
,    DiskDelete = "disk_delete"
,    DiskUpdate = "disk_update"
,    DiskDuplicate = "disk_duplicate"
,    DiskImagize = "disk_imagize"
,    DiskResize = "disk_resize"
,    DnsRecordCreate = "dns_record_create"
,    DnsRecordDelete = "dns_record_delete"
,    DnsRecordUpdate = "dns_record_update"
,    DnsZoneCreate = "dns_zone_create"
,    DnsZoneDelete = "dns_zone_delete"
,    DnsZoneImport = "dns_zone_import"
,    DnsZoneUpdate = "dns_zone_update"
,    EntityTransferAccept = "entity_transfer_accept"
,    EntityTransferCancel = "entity_transfer_cancel"
,    EntityTransferCreate = "entity_transfer_create"
,    EntityTransferFail = "entity_transfer_fail"
,    EntityTransferStale = "entity_transfer_stale"
,    FirewallCreate = "firewall_create"
,    FirewallDelete = "firewall_delete"
,    FirewallDisable = "firewall_disable"
,    FirewallEnable = "firewall_enable"
,    FirewallUpdate = "firewall_update"
,    FirewallDeviceAdd = "firewall_device_add"
,    FirewallDeviceRemove = "firewall_device_remove"
,    HostReboot = "host_reboot"
,    ImageDelete = "image_delete"
,    ImageUpdate = "image_update"
,    ImageUpload = "image_upload"
,    IpaddressUpdate = "ipaddress_update"
,    LassieReboot = "lassie_reboot"
,    LishBoot = "lish_boot"
,    LinodeAddip = "linode_addip"
,    LinodeBoot = "linode_boot"
,    LinodeClone = "linode_clone"
,    LinodeCreate = "linode_create"
,    LinodeDelete = "linode_delete"
,    LinodeUpdate = "linode_update"
,    LinodeDeleteip = "linode_deleteip"
,    LinodeMigrate = "linode_migrate"
,    LinodeMigrateDatacenter = "linode_migrate_datacenter"
,    LinodeMigrateDatacenterCreate = "linode_migrate_datacenter_create"
,    LinodeMutate = "linode_mutate"
,    LinodeMutateCreate = "linode_mutate_create"
,    LinodeReboot = "linode_reboot"
,    LinodeRebuild = "linode_rebuild"
,    LinodeResize = "linode_resize"
,    LinodeResizeCreate = "linode_resize_create"
,    LinodeShutdown = "linode_shutdown"
,    LinodeSnapshot = "linode_snapshot"
,    LinodeConfigCreate = "linode_config_create"
,    LinodeConfigDelete = "linode_config_delete"
,    LinodeConfigUpdate = "linode_config_update"
,    LkeNodeCreate = "lke_node_create"
,    LongviewclientCreate = "longviewclient_create"
,    LongviewclientDelete = "longviewclient_delete"
,    LongviewclientUpdate = "longviewclient_update"
,    ManagedDisabled = "managed_disabled"
,    ManagedEnabled = "managed_enabled"
,    ManagedServiceCreate = "managed_service_create"
,    ManagedServiceDelete = "managed_service_delete"
,    NodebalancerCreate = "nodebalancer_create"
,    NodebalancerDelete = "nodebalancer_delete"
,    NodebalancerUpdate = "nodebalancer_update"
,    NodebalancerConfigCreate = "nodebalancer_config_create"
,    NodebalancerConfigDelete = "nodebalancer_config_delete"
,    NodebalancerConfigUpdate = "nodebalancer_config_update"
,    NodebalancerNodeCreate = "nodebalancer_node_create"
,    NodebalancerNodeDelete = "nodebalancer_node_delete"
,    NodebalancerNodeUpdate = "nodebalancer_node_update"
,    OauthClientCreate = "oauth_client_create"
,    OauthClientDelete = "oauth_client_delete"
,    OauthClientSecretReset = "oauth_client_secret_reset"
,    OauthClientUpdate = "oauth_client_update"
,    PasswordReset = "password_reset"
,    PaymentSubmitted = "payment_submitted"
,    ProfileUpdate = "profile_update"
,    StackscriptCreate = "stackscript_create"
,    StackscriptDelete = "stackscript_delete"
,    StackscriptUpdate = "stackscript_update"
,    StackscriptPublicize = "stackscript_publicize"
,    StackscriptRevise = "stackscript_revise"
,    TagCreate = "tag_create"
,    TagDelete = "tag_delete"
,    TfaDisabled = "tfa_disabled"
,    TfaEnabled = "tfa_enabled"
,    TicketAttachmentUpload = "ticket_attachment_upload"
,    TicketCreate = "ticket_create"
,    TicketUpdate = "ticket_update"
,    TokenCreate = "token_create"
,    TokenDelete = "token_delete"
,    TokenUpdate = "token_update"
,    UserCreate = "user_create"
,    UserUpdate = "user_update"
,    UserDelete = "user_delete"
,    UserSshKeyAdd = "user_ssh_key_add"
,    UserSshKeyDelete = "user_ssh_key_delete"
,    UserSshKeyUpdate = "user_ssh_key_update"
,    VlanAttach = "vlan_attach"
,    VlanDetach = "vlan_detach"
,    VolumeAttach = "volume_attach"
,    VolumeClone = "volume_clone"
,    VolumeCreate = "volume_create"
,    VolumeDelete = "volume_delete"
,    VolumeUpdate = "volume_update"
,    VolumeDetach = "volume_detach"
,    VolumeResize = "volume_resize"
}

export enum EventEntityTypeEnum {
    Account = "account"
,    Backups = "backups"
,    Community = "community"
,    Disks = "disks"
,    Domain = "domain"
,    EntityTransfer = "entity_transfer"
,    Firewall = "firewall"
,    Image = "image"
,    Ipaddress = "ipaddress"
,    Linode = "linode"
,    Longview = "longview"
,    ManagedService = "managed_service"
,    Nodebalancer = "nodebalancer"
,    OauthClient = "oauth_client"
,    Profile = "profile"
,    Stackscript = "stackscript"
,    Tag = "tag"
,    Ticket = "ticket"
,    Token = "token"
,    User = "user"
,    UserSshKey = "user_ssh_key"
,    Volume = "volume"
}


// EventEntity
/** 
 * Detailed information about the Event's entity, including ID, type, label, and URL used to access it.
 * 
**/
export class EventEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: EventEntityTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// EventSecondaryEntity
/** 
 * Detailed information about the Event's secondary entity, which provides additional information
 * for events such as, but not limited to, `linode_boot`, `linode_reboot`, `linode_create`, and `linode_clone` Event actions.
 * 
**/
export class EventSecondaryEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

export enum EventStatusEnum {
    Failed = "failed"
,    Finished = "finished"
,    Notification = "notification"
,    Scheduled = "scheduled"
,    Started = "started"
}


// Event
/** 
 * A collection of Event objects. An Event is an action taken against an entity related to your Account. For example, booting a Linode would create an Event.
 * The Events returned depends on your grants.
 * 
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: EventActionEnum;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=entity" })
  entity?: EventEntity;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=percent_complete" })
  percentComplete?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: string;

  @Metadata({ data: "json, name=read" })
  read?: boolean;

  @Metadata({ data: "json, name=secondary_entity" })
  secondaryEntity?: EventSecondaryEntity;

  @Metadata({ data: "json, name=seen" })
  seen?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: EventStatusEnum;

  @Metadata({ data: "json, name=time_remaining" })
  timeRemaining?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
