var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var EventActionEnum;
(function (EventActionEnum) {
    EventActionEnum["AccountUpdate"] = "account_update";
    EventActionEnum["AccountSettingsUpdate"] = "account_settings_update";
    EventActionEnum["BackupsEnable"] = "backups_enable";
    EventActionEnum["BackupsCancel"] = "backups_cancel";
    EventActionEnum["BackupsRestore"] = "backups_restore";
    EventActionEnum["CommunityQuestionReply"] = "community_question_reply";
    EventActionEnum["CommunityLike"] = "community_like";
    EventActionEnum["CreditCardUpdated"] = "credit_card_updated";
    EventActionEnum["DiskCreate"] = "disk_create";
    EventActionEnum["DiskDelete"] = "disk_delete";
    EventActionEnum["DiskUpdate"] = "disk_update";
    EventActionEnum["DiskDuplicate"] = "disk_duplicate";
    EventActionEnum["DiskImagize"] = "disk_imagize";
    EventActionEnum["DiskResize"] = "disk_resize";
    EventActionEnum["DnsRecordCreate"] = "dns_record_create";
    EventActionEnum["DnsRecordDelete"] = "dns_record_delete";
    EventActionEnum["DnsRecordUpdate"] = "dns_record_update";
    EventActionEnum["DnsZoneCreate"] = "dns_zone_create";
    EventActionEnum["DnsZoneDelete"] = "dns_zone_delete";
    EventActionEnum["DnsZoneImport"] = "dns_zone_import";
    EventActionEnum["DnsZoneUpdate"] = "dns_zone_update";
    EventActionEnum["EntityTransferAccept"] = "entity_transfer_accept";
    EventActionEnum["EntityTransferCancel"] = "entity_transfer_cancel";
    EventActionEnum["EntityTransferCreate"] = "entity_transfer_create";
    EventActionEnum["EntityTransferFail"] = "entity_transfer_fail";
    EventActionEnum["EntityTransferStale"] = "entity_transfer_stale";
    EventActionEnum["FirewallCreate"] = "firewall_create";
    EventActionEnum["FirewallDelete"] = "firewall_delete";
    EventActionEnum["FirewallDisable"] = "firewall_disable";
    EventActionEnum["FirewallEnable"] = "firewall_enable";
    EventActionEnum["FirewallUpdate"] = "firewall_update";
    EventActionEnum["FirewallDeviceAdd"] = "firewall_device_add";
    EventActionEnum["FirewallDeviceRemove"] = "firewall_device_remove";
    EventActionEnum["HostReboot"] = "host_reboot";
    EventActionEnum["ImageDelete"] = "image_delete";
    EventActionEnum["ImageUpdate"] = "image_update";
    EventActionEnum["ImageUpload"] = "image_upload";
    EventActionEnum["IpaddressUpdate"] = "ipaddress_update";
    EventActionEnum["LassieReboot"] = "lassie_reboot";
    EventActionEnum["LishBoot"] = "lish_boot";
    EventActionEnum["LinodeAddip"] = "linode_addip";
    EventActionEnum["LinodeBoot"] = "linode_boot";
    EventActionEnum["LinodeClone"] = "linode_clone";
    EventActionEnum["LinodeCreate"] = "linode_create";
    EventActionEnum["LinodeDelete"] = "linode_delete";
    EventActionEnum["LinodeUpdate"] = "linode_update";
    EventActionEnum["LinodeDeleteip"] = "linode_deleteip";
    EventActionEnum["LinodeMigrate"] = "linode_migrate";
    EventActionEnum["LinodeMigrateDatacenter"] = "linode_migrate_datacenter";
    EventActionEnum["LinodeMigrateDatacenterCreate"] = "linode_migrate_datacenter_create";
    EventActionEnum["LinodeMutate"] = "linode_mutate";
    EventActionEnum["LinodeMutateCreate"] = "linode_mutate_create";
    EventActionEnum["LinodeReboot"] = "linode_reboot";
    EventActionEnum["LinodeRebuild"] = "linode_rebuild";
    EventActionEnum["LinodeResize"] = "linode_resize";
    EventActionEnum["LinodeResizeCreate"] = "linode_resize_create";
    EventActionEnum["LinodeShutdown"] = "linode_shutdown";
    EventActionEnum["LinodeSnapshot"] = "linode_snapshot";
    EventActionEnum["LinodeConfigCreate"] = "linode_config_create";
    EventActionEnum["LinodeConfigDelete"] = "linode_config_delete";
    EventActionEnum["LinodeConfigUpdate"] = "linode_config_update";
    EventActionEnum["LkeNodeCreate"] = "lke_node_create";
    EventActionEnum["LongviewclientCreate"] = "longviewclient_create";
    EventActionEnum["LongviewclientDelete"] = "longviewclient_delete";
    EventActionEnum["LongviewclientUpdate"] = "longviewclient_update";
    EventActionEnum["ManagedDisabled"] = "managed_disabled";
    EventActionEnum["ManagedEnabled"] = "managed_enabled";
    EventActionEnum["ManagedServiceCreate"] = "managed_service_create";
    EventActionEnum["ManagedServiceDelete"] = "managed_service_delete";
    EventActionEnum["NodebalancerCreate"] = "nodebalancer_create";
    EventActionEnum["NodebalancerDelete"] = "nodebalancer_delete";
    EventActionEnum["NodebalancerUpdate"] = "nodebalancer_update";
    EventActionEnum["NodebalancerConfigCreate"] = "nodebalancer_config_create";
    EventActionEnum["NodebalancerConfigDelete"] = "nodebalancer_config_delete";
    EventActionEnum["NodebalancerConfigUpdate"] = "nodebalancer_config_update";
    EventActionEnum["NodebalancerNodeCreate"] = "nodebalancer_node_create";
    EventActionEnum["NodebalancerNodeDelete"] = "nodebalancer_node_delete";
    EventActionEnum["NodebalancerNodeUpdate"] = "nodebalancer_node_update";
    EventActionEnum["OauthClientCreate"] = "oauth_client_create";
    EventActionEnum["OauthClientDelete"] = "oauth_client_delete";
    EventActionEnum["OauthClientSecretReset"] = "oauth_client_secret_reset";
    EventActionEnum["OauthClientUpdate"] = "oauth_client_update";
    EventActionEnum["PasswordReset"] = "password_reset";
    EventActionEnum["PaymentSubmitted"] = "payment_submitted";
    EventActionEnum["ProfileUpdate"] = "profile_update";
    EventActionEnum["StackscriptCreate"] = "stackscript_create";
    EventActionEnum["StackscriptDelete"] = "stackscript_delete";
    EventActionEnum["StackscriptUpdate"] = "stackscript_update";
    EventActionEnum["StackscriptPublicize"] = "stackscript_publicize";
    EventActionEnum["StackscriptRevise"] = "stackscript_revise";
    EventActionEnum["TagCreate"] = "tag_create";
    EventActionEnum["TagDelete"] = "tag_delete";
    EventActionEnum["TfaDisabled"] = "tfa_disabled";
    EventActionEnum["TfaEnabled"] = "tfa_enabled";
    EventActionEnum["TicketAttachmentUpload"] = "ticket_attachment_upload";
    EventActionEnum["TicketCreate"] = "ticket_create";
    EventActionEnum["TicketUpdate"] = "ticket_update";
    EventActionEnum["TokenCreate"] = "token_create";
    EventActionEnum["TokenDelete"] = "token_delete";
    EventActionEnum["TokenUpdate"] = "token_update";
    EventActionEnum["UserCreate"] = "user_create";
    EventActionEnum["UserUpdate"] = "user_update";
    EventActionEnum["UserDelete"] = "user_delete";
    EventActionEnum["UserSshKeyAdd"] = "user_ssh_key_add";
    EventActionEnum["UserSshKeyDelete"] = "user_ssh_key_delete";
    EventActionEnum["UserSshKeyUpdate"] = "user_ssh_key_update";
    EventActionEnum["VlanAttach"] = "vlan_attach";
    EventActionEnum["VlanDetach"] = "vlan_detach";
    EventActionEnum["VolumeAttach"] = "volume_attach";
    EventActionEnum["VolumeClone"] = "volume_clone";
    EventActionEnum["VolumeCreate"] = "volume_create";
    EventActionEnum["VolumeDelete"] = "volume_delete";
    EventActionEnum["VolumeUpdate"] = "volume_update";
    EventActionEnum["VolumeDetach"] = "volume_detach";
    EventActionEnum["VolumeResize"] = "volume_resize";
})(EventActionEnum || (EventActionEnum = {}));
export var EventEntityTypeEnum;
(function (EventEntityTypeEnum) {
    EventEntityTypeEnum["Account"] = "account";
    EventEntityTypeEnum["Backups"] = "backups";
    EventEntityTypeEnum["Community"] = "community";
    EventEntityTypeEnum["Disks"] = "disks";
    EventEntityTypeEnum["Domain"] = "domain";
    EventEntityTypeEnum["EntityTransfer"] = "entity_transfer";
    EventEntityTypeEnum["Firewall"] = "firewall";
    EventEntityTypeEnum["Image"] = "image";
    EventEntityTypeEnum["Ipaddress"] = "ipaddress";
    EventEntityTypeEnum["Linode"] = "linode";
    EventEntityTypeEnum["Longview"] = "longview";
    EventEntityTypeEnum["ManagedService"] = "managed_service";
    EventEntityTypeEnum["Nodebalancer"] = "nodebalancer";
    EventEntityTypeEnum["OauthClient"] = "oauth_client";
    EventEntityTypeEnum["Profile"] = "profile";
    EventEntityTypeEnum["Stackscript"] = "stackscript";
    EventEntityTypeEnum["Tag"] = "tag";
    EventEntityTypeEnum["Ticket"] = "ticket";
    EventEntityTypeEnum["Token"] = "token";
    EventEntityTypeEnum["User"] = "user";
    EventEntityTypeEnum["UserSshKey"] = "user_ssh_key";
    EventEntityTypeEnum["Volume"] = "volume";
})(EventEntityTypeEnum || (EventEntityTypeEnum = {}));
// EventEntity
/**
 * Detailed information about the Event's entity, including ID, type, label, and URL used to access it.
 *
**/
var EventEntity = /** @class */ (function (_super) {
    __extends(EventEntity, _super);
    function EventEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], EventEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], EventEntity.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EventEntity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EventEntity.prototype, "url", void 0);
    return EventEntity;
}(SpeakeasyBase));
export { EventEntity };
// EventSecondaryEntity
/**
 * Detailed information about the Event's secondary entity, which provides additional information
 * for events such as, but not limited to, `linode_boot`, `linode_reboot`, `linode_create`, and `linode_clone` Event actions.
 *
**/
var EventSecondaryEntity = /** @class */ (function (_super) {
    __extends(EventSecondaryEntity, _super);
    function EventSecondaryEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EventSecondaryEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], EventSecondaryEntity.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EventSecondaryEntity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EventSecondaryEntity.prototype, "url", void 0);
    return EventSecondaryEntity;
}(SpeakeasyBase));
export { EventSecondaryEntity };
export var EventStatusEnum;
(function (EventStatusEnum) {
    EventStatusEnum["Failed"] = "failed";
    EventStatusEnum["Finished"] = "finished";
    EventStatusEnum["Notification"] = "notification";
    EventStatusEnum["Scheduled"] = "scheduled";
    EventStatusEnum["Started"] = "started";
})(EventStatusEnum || (EventStatusEnum = {}));
// Event
/**
 * A collection of Event objects. An Event is an action taken against an entity related to your Account. For example, booting a Linode would create an Event.
 * The Events returned depends on your grants.
 *
**/
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], Event.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Event.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], Event.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity" }),
        __metadata("design:type", EventEntity)
    ], Event.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Event.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Event.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percent_complete" }),
        __metadata("design:type", Number)
    ], Event.prototype, "percentComplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", String)
    ], Event.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "read", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondary_entity" }),
        __metadata("design:type", EventSecondaryEntity)
    ], Event.prototype, "secondaryEntity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seen" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "seen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Event.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_remaining" }),
        __metadata("design:type", String)
    ], Event.prototype, "timeRemaining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], Event.prototype, "username", void 0);
    return Event;
}(SpeakeasyBase));
export { Event };
