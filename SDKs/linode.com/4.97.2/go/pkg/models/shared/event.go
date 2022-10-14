package shared

import (
	"time"
)

type EventActionEnum string

const (
	EventActionEnumAccountUpdate                 EventActionEnum = "account_update"
	EventActionEnumAccountSettingsUpdate         EventActionEnum = "account_settings_update"
	EventActionEnumBackupsEnable                 EventActionEnum = "backups_enable"
	EventActionEnumBackupsCancel                 EventActionEnum = "backups_cancel"
	EventActionEnumBackupsRestore                EventActionEnum = "backups_restore"
	EventActionEnumCommunityQuestionReply        EventActionEnum = "community_question_reply"
	EventActionEnumCommunityLike                 EventActionEnum = "community_like"
	EventActionEnumCreditCardUpdated             EventActionEnum = "credit_card_updated"
	EventActionEnumDiskCreate                    EventActionEnum = "disk_create"
	EventActionEnumDiskDelete                    EventActionEnum = "disk_delete"
	EventActionEnumDiskUpdate                    EventActionEnum = "disk_update"
	EventActionEnumDiskDuplicate                 EventActionEnum = "disk_duplicate"
	EventActionEnumDiskImagize                   EventActionEnum = "disk_imagize"
	EventActionEnumDiskResize                    EventActionEnum = "disk_resize"
	EventActionEnumDNSRecordCreate               EventActionEnum = "dns_record_create"
	EventActionEnumDNSRecordDelete               EventActionEnum = "dns_record_delete"
	EventActionEnumDNSRecordUpdate               EventActionEnum = "dns_record_update"
	EventActionEnumDNSZoneCreate                 EventActionEnum = "dns_zone_create"
	EventActionEnumDNSZoneDelete                 EventActionEnum = "dns_zone_delete"
	EventActionEnumDNSZoneImport                 EventActionEnum = "dns_zone_import"
	EventActionEnumDNSZoneUpdate                 EventActionEnum = "dns_zone_update"
	EventActionEnumEntityTransferAccept          EventActionEnum = "entity_transfer_accept"
	EventActionEnumEntityTransferCancel          EventActionEnum = "entity_transfer_cancel"
	EventActionEnumEntityTransferCreate          EventActionEnum = "entity_transfer_create"
	EventActionEnumEntityTransferFail            EventActionEnum = "entity_transfer_fail"
	EventActionEnumEntityTransferStale           EventActionEnum = "entity_transfer_stale"
	EventActionEnumFirewallCreate                EventActionEnum = "firewall_create"
	EventActionEnumFirewallDelete                EventActionEnum = "firewall_delete"
	EventActionEnumFirewallDisable               EventActionEnum = "firewall_disable"
	EventActionEnumFirewallEnable                EventActionEnum = "firewall_enable"
	EventActionEnumFirewallUpdate                EventActionEnum = "firewall_update"
	EventActionEnumFirewallDeviceAdd             EventActionEnum = "firewall_device_add"
	EventActionEnumFirewallDeviceRemove          EventActionEnum = "firewall_device_remove"
	EventActionEnumHostReboot                    EventActionEnum = "host_reboot"
	EventActionEnumImageDelete                   EventActionEnum = "image_delete"
	EventActionEnumImageUpdate                   EventActionEnum = "image_update"
	EventActionEnumImageUpload                   EventActionEnum = "image_upload"
	EventActionEnumIpaddressUpdate               EventActionEnum = "ipaddress_update"
	EventActionEnumLassieReboot                  EventActionEnum = "lassie_reboot"
	EventActionEnumLishBoot                      EventActionEnum = "lish_boot"
	EventActionEnumLinodeAddip                   EventActionEnum = "linode_addip"
	EventActionEnumLinodeBoot                    EventActionEnum = "linode_boot"
	EventActionEnumLinodeClone                   EventActionEnum = "linode_clone"
	EventActionEnumLinodeCreate                  EventActionEnum = "linode_create"
	EventActionEnumLinodeDelete                  EventActionEnum = "linode_delete"
	EventActionEnumLinodeUpdate                  EventActionEnum = "linode_update"
	EventActionEnumLinodeDeleteip                EventActionEnum = "linode_deleteip"
	EventActionEnumLinodeMigrate                 EventActionEnum = "linode_migrate"
	EventActionEnumLinodeMigrateDatacenter       EventActionEnum = "linode_migrate_datacenter"
	EventActionEnumLinodeMigrateDatacenterCreate EventActionEnum = "linode_migrate_datacenter_create"
	EventActionEnumLinodeMutate                  EventActionEnum = "linode_mutate"
	EventActionEnumLinodeMutateCreate            EventActionEnum = "linode_mutate_create"
	EventActionEnumLinodeReboot                  EventActionEnum = "linode_reboot"
	EventActionEnumLinodeRebuild                 EventActionEnum = "linode_rebuild"
	EventActionEnumLinodeResize                  EventActionEnum = "linode_resize"
	EventActionEnumLinodeResizeCreate            EventActionEnum = "linode_resize_create"
	EventActionEnumLinodeShutdown                EventActionEnum = "linode_shutdown"
	EventActionEnumLinodeSnapshot                EventActionEnum = "linode_snapshot"
	EventActionEnumLinodeConfigCreate            EventActionEnum = "linode_config_create"
	EventActionEnumLinodeConfigDelete            EventActionEnum = "linode_config_delete"
	EventActionEnumLinodeConfigUpdate            EventActionEnum = "linode_config_update"
	EventActionEnumLkeNodeCreate                 EventActionEnum = "lke_node_create"
	EventActionEnumLongviewclientCreate          EventActionEnum = "longviewclient_create"
	EventActionEnumLongviewclientDelete          EventActionEnum = "longviewclient_delete"
	EventActionEnumLongviewclientUpdate          EventActionEnum = "longviewclient_update"
	EventActionEnumManagedDisabled               EventActionEnum = "managed_disabled"
	EventActionEnumManagedEnabled                EventActionEnum = "managed_enabled"
	EventActionEnumManagedServiceCreate          EventActionEnum = "managed_service_create"
	EventActionEnumManagedServiceDelete          EventActionEnum = "managed_service_delete"
	EventActionEnumNodebalancerCreate            EventActionEnum = "nodebalancer_create"
	EventActionEnumNodebalancerDelete            EventActionEnum = "nodebalancer_delete"
	EventActionEnumNodebalancerUpdate            EventActionEnum = "nodebalancer_update"
	EventActionEnumNodebalancerConfigCreate      EventActionEnum = "nodebalancer_config_create"
	EventActionEnumNodebalancerConfigDelete      EventActionEnum = "nodebalancer_config_delete"
	EventActionEnumNodebalancerConfigUpdate      EventActionEnum = "nodebalancer_config_update"
	EventActionEnumNodebalancerNodeCreate        EventActionEnum = "nodebalancer_node_create"
	EventActionEnumNodebalancerNodeDelete        EventActionEnum = "nodebalancer_node_delete"
	EventActionEnumNodebalancerNodeUpdate        EventActionEnum = "nodebalancer_node_update"
	EventActionEnumOauthClientCreate             EventActionEnum = "oauth_client_create"
	EventActionEnumOauthClientDelete             EventActionEnum = "oauth_client_delete"
	EventActionEnumOauthClientSecretReset        EventActionEnum = "oauth_client_secret_reset"
	EventActionEnumOauthClientUpdate             EventActionEnum = "oauth_client_update"
	EventActionEnumPasswordReset                 EventActionEnum = "password_reset"
	EventActionEnumPaymentSubmitted              EventActionEnum = "payment_submitted"
	EventActionEnumProfileUpdate                 EventActionEnum = "profile_update"
	EventActionEnumStackscriptCreate             EventActionEnum = "stackscript_create"
	EventActionEnumStackscriptDelete             EventActionEnum = "stackscript_delete"
	EventActionEnumStackscriptUpdate             EventActionEnum = "stackscript_update"
	EventActionEnumStackscriptPublicize          EventActionEnum = "stackscript_publicize"
	EventActionEnumStackscriptRevise             EventActionEnum = "stackscript_revise"
	EventActionEnumTagCreate                     EventActionEnum = "tag_create"
	EventActionEnumTagDelete                     EventActionEnum = "tag_delete"
	EventActionEnumTfaDisabled                   EventActionEnum = "tfa_disabled"
	EventActionEnumTfaEnabled                    EventActionEnum = "tfa_enabled"
	EventActionEnumTicketAttachmentUpload        EventActionEnum = "ticket_attachment_upload"
	EventActionEnumTicketCreate                  EventActionEnum = "ticket_create"
	EventActionEnumTicketUpdate                  EventActionEnum = "ticket_update"
	EventActionEnumTokenCreate                   EventActionEnum = "token_create"
	EventActionEnumTokenDelete                   EventActionEnum = "token_delete"
	EventActionEnumTokenUpdate                   EventActionEnum = "token_update"
	EventActionEnumUserCreate                    EventActionEnum = "user_create"
	EventActionEnumUserUpdate                    EventActionEnum = "user_update"
	EventActionEnumUserDelete                    EventActionEnum = "user_delete"
	EventActionEnumUserSSHKeyAdd                 EventActionEnum = "user_ssh_key_add"
	EventActionEnumUserSSHKeyDelete              EventActionEnum = "user_ssh_key_delete"
	EventActionEnumUserSSHKeyUpdate              EventActionEnum = "user_ssh_key_update"
	EventActionEnumVlanAttach                    EventActionEnum = "vlan_attach"
	EventActionEnumVlanDetach                    EventActionEnum = "vlan_detach"
	EventActionEnumVolumeAttach                  EventActionEnum = "volume_attach"
	EventActionEnumVolumeClone                   EventActionEnum = "volume_clone"
	EventActionEnumVolumeCreate                  EventActionEnum = "volume_create"
	EventActionEnumVolumeDelete                  EventActionEnum = "volume_delete"
	EventActionEnumVolumeUpdate                  EventActionEnum = "volume_update"
	EventActionEnumVolumeDetach                  EventActionEnum = "volume_detach"
	EventActionEnumVolumeResize                  EventActionEnum = "volume_resize"
)

type EventEntityTypeEnum string

const (
	EventEntityTypeEnumAccount        EventEntityTypeEnum = "account"
	EventEntityTypeEnumBackups        EventEntityTypeEnum = "backups"
	EventEntityTypeEnumCommunity      EventEntityTypeEnum = "community"
	EventEntityTypeEnumDisks          EventEntityTypeEnum = "disks"
	EventEntityTypeEnumDomain         EventEntityTypeEnum = "domain"
	EventEntityTypeEnumEntityTransfer EventEntityTypeEnum = "entity_transfer"
	EventEntityTypeEnumFirewall       EventEntityTypeEnum = "firewall"
	EventEntityTypeEnumImage          EventEntityTypeEnum = "image"
	EventEntityTypeEnumIpaddress      EventEntityTypeEnum = "ipaddress"
	EventEntityTypeEnumLinode         EventEntityTypeEnum = "linode"
	EventEntityTypeEnumLongview       EventEntityTypeEnum = "longview"
	EventEntityTypeEnumManagedService EventEntityTypeEnum = "managed_service"
	EventEntityTypeEnumNodebalancer   EventEntityTypeEnum = "nodebalancer"
	EventEntityTypeEnumOauthClient    EventEntityTypeEnum = "oauth_client"
	EventEntityTypeEnumProfile        EventEntityTypeEnum = "profile"
	EventEntityTypeEnumStackscript    EventEntityTypeEnum = "stackscript"
	EventEntityTypeEnumTag            EventEntityTypeEnum = "tag"
	EventEntityTypeEnumTicket         EventEntityTypeEnum = "ticket"
	EventEntityTypeEnumToken          EventEntityTypeEnum = "token"
	EventEntityTypeEnumUser           EventEntityTypeEnum = "user"
	EventEntityTypeEnumUserSSHKey     EventEntityTypeEnum = "user_ssh_key"
	EventEntityTypeEnumVolume         EventEntityTypeEnum = "volume"
)

type EventEntity struct {
	ID    *int64               `json:"id,omitempty"`
	Label *string              `json:"label,omitempty"`
	Type  *EventEntityTypeEnum `json:"type,omitempty"`
	URL   *string              `json:"url,omitempty"`
}

type EventSecondaryEntity struct {
	ID    *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	Type  *string `json:"type,omitempty"`
	URL   *string `json:"url,omitempty"`
}

type EventStatusEnum string

const (
	EventStatusEnumFailed       EventStatusEnum = "failed"
	EventStatusEnumFinished     EventStatusEnum = "finished"
	EventStatusEnumNotification EventStatusEnum = "notification"
	EventStatusEnumScheduled    EventStatusEnum = "scheduled"
	EventStatusEnumStarted      EventStatusEnum = "started"
)

type Event struct {
	Action          *EventActionEnum      `json:"action,omitempty"`
	Created         *time.Time            `json:"created,omitempty"`
	Duration        *float64              `json:"duration,omitempty"`
	Entity          *EventEntity          `json:"entity,omitempty"`
	ID              *int64                `json:"id,omitempty"`
	Message         *string               `json:"message,omitempty"`
	PercentComplete *int64                `json:"percent_complete,omitempty"`
	Rate            *string               `json:"rate,omitempty"`
	Read            *bool                 `json:"read,omitempty"`
	SecondaryEntity *EventSecondaryEntity `json:"secondary_entity,omitempty"`
	Seen            *bool                 `json:"seen,omitempty"`
	Status          *EventStatusEnum      `json:"status,omitempty"`
	TimeRemaining   *string               `json:"time_remaining,omitempty"`
	Username        *string               `json:"username,omitempty"`
}
