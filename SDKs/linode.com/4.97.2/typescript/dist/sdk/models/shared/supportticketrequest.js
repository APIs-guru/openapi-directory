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
// SupportTicketRequest
/**
 * An object representing a created Support Ticket - a question or issue and request for help from the Linode support team.
 * Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.
 *
**/
var SupportTicketRequest = /** @class */ (function (_super) {
    __extends(SupportTicketRequest, _super);
    function SupportTicketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SupportTicketRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain_id" }),
        __metadata("design:type", Number)
    ], SupportTicketRequest.prototype, "domainId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linode_id" }),
        __metadata("design:type", Number)
    ], SupportTicketRequest.prototype, "linodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longviewclient_id" }),
        __metadata("design:type", Number)
    ], SupportTicketRequest.prototype, "longviewclientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managed_issue" }),
        __metadata("design:type", Boolean)
    ], SupportTicketRequest.prototype, "managedIssue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodebalancer_id" }),
        __metadata("design:type", Number)
    ], SupportTicketRequest.prototype, "nodebalancerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], SupportTicketRequest.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], SupportTicketRequest.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", String)
    ], SupportTicketRequest.prototype, "vlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume_id" }),
        __metadata("design:type", Number)
    ], SupportTicketRequest.prototype, "volumeId", void 0);
    return SupportTicketRequest;
}(SpeakeasyBase));
export { SupportTicketRequest };
