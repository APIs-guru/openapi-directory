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
export var ManagedServiceServiceTypeEnum;
(function (ManagedServiceServiceTypeEnum) {
    ManagedServiceServiceTypeEnum["Url"] = "url";
    ManagedServiceServiceTypeEnum["Tcp"] = "tcp";
})(ManagedServiceServiceTypeEnum || (ManagedServiceServiceTypeEnum = {}));
export var ManagedServiceStatusEnum;
(function (ManagedServiceStatusEnum) {
    ManagedServiceStatusEnum["Disabled"] = "disabled";
    ManagedServiceStatusEnum["Pending"] = "pending";
    ManagedServiceStatusEnum["Ok"] = "ok";
    ManagedServiceStatusEnum["Problem"] = "problem";
})(ManagedServiceStatusEnum || (ManagedServiceStatusEnum = {}));
// ManagedServiceInput
/**
 * A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
 *
**/
var ManagedServiceInput = /** @class */ (function (_super) {
    __extends(ManagedServiceInput, _super);
    function ManagedServiceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], ManagedServiceInput.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ManagedServiceInput.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consultation_group" }),
        __metadata("design:type", String)
    ], ManagedServiceInput.prototype, "consultationGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials" }),
        __metadata("design:type", Array)
    ], ManagedServiceInput.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ManagedServiceInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], ManagedServiceInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ManagedServiceInput.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_type" }),
        __metadata("design:type", String)
    ], ManagedServiceInput.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], ManagedServiceInput.prototype, "timeout", void 0);
    return ManagedServiceInput;
}(SpeakeasyBase));
export { ManagedServiceInput };
// ManagedService
/**
 * A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
 *
**/
var ManagedService = /** @class */ (function (_super) {
    __extends(ManagedService, _super);
    function ManagedService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], ManagedService.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ManagedService.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consultation_group" }),
        __metadata("design:type", String)
    ], ManagedService.prototype, "consultationGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], ManagedService.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials" }),
        __metadata("design:type", Array)
    ], ManagedService.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ManagedService.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ManagedService.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], ManagedService.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ManagedService.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_type" }),
        __metadata("design:type", String)
    ], ManagedService.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ManagedService.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], ManagedService.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], ManagedService.prototype, "updated", void 0);
    return ManagedService;
}(SpeakeasyBase));
export { ManagedService };
