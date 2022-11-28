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
// GoogleCloudServicebrokerV1beta1ServiceInstance
/**
 * Message describing inputs to Provision and Update Service instance requests.
**/
var GoogleCloudServicebrokerV1beta1ServiceInstance = /** @class */ (function (_super) {
    __extends(GoogleCloudServicebrokerV1beta1ServiceInstance, _super);
    function GoogleCloudServicebrokerV1beta1ServiceInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", Map)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentName" }),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "deploymentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance_id" }),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_guid" }),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "organizationGuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plan_id" }),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "planId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_values" }),
        __metadata("design:type", Map)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "previousValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_id" }),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=space_guid" }),
        __metadata("design:type", String)
    ], GoogleCloudServicebrokerV1beta1ServiceInstance.prototype, "spaceGuid", void 0);
    return GoogleCloudServicebrokerV1beta1ServiceInstance;
}(SpeakeasyBase));
export { GoogleCloudServicebrokerV1beta1ServiceInstance };
