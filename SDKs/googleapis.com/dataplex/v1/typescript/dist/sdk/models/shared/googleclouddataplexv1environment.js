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
import { GoogleCloudDataplexV1EnvironmentEndpoints } from "./googleclouddataplexv1environmentendpoints";
import { GoogleCloudDataplexV1EnvironmentInfrastructureSpec } from "./googleclouddataplexv1environmentinfrastructurespec";
import { GoogleCloudDataplexV1EnvironmentSessionSpec } from "./googleclouddataplexv1environmentsessionspec";
import { GoogleCloudDataplexV1EnvironmentSessionStatus } from "./googleclouddataplexv1environmentsessionstatus";
export var GoogleCloudDataplexV1EnvironmentStateEnum;
(function (GoogleCloudDataplexV1EnvironmentStateEnum) {
    GoogleCloudDataplexV1EnvironmentStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDataplexV1EnvironmentStateEnum["Active"] = "ACTIVE";
    GoogleCloudDataplexV1EnvironmentStateEnum["Creating"] = "CREATING";
    GoogleCloudDataplexV1EnvironmentStateEnum["Deleting"] = "DELETING";
    GoogleCloudDataplexV1EnvironmentStateEnum["ActionRequired"] = "ACTION_REQUIRED";
})(GoogleCloudDataplexV1EnvironmentStateEnum || (GoogleCloudDataplexV1EnvironmentStateEnum = {}));
// GoogleCloudDataplexV1Environment
/**
 * Environment represents a user-visible compute infrastructure for analytics within a lake.
**/
var GoogleCloudDataplexV1Environment = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1Environment, _super);
    function GoogleCloudDataplexV1Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Environment.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Environment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Environment.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoints" }),
        __metadata("design:type", GoogleCloudDataplexV1EnvironmentEndpoints)
    ], GoogleCloudDataplexV1Environment.prototype, "endpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infrastructureSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1EnvironmentInfrastructureSpec)
    ], GoogleCloudDataplexV1Environment.prototype, "infrastructureSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1Environment.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Environment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1EnvironmentSessionSpec)
    ], GoogleCloudDataplexV1Environment.prototype, "sessionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1EnvironmentSessionStatus)
    ], GoogleCloudDataplexV1Environment.prototype, "sessionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Environment.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Environment.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Environment.prototype, "updateTime", void 0);
    return GoogleCloudDataplexV1Environment;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1Environment };
// GoogleCloudDataplexV1EnvironmentInput
/**
 * Environment represents a user-visible compute infrastructure for analytics within a lake.
**/
var GoogleCloudDataplexV1EnvironmentInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1EnvironmentInput, _super);
    function GoogleCloudDataplexV1EnvironmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1EnvironmentInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1EnvironmentInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infrastructureSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1EnvironmentInfrastructureSpec)
    ], GoogleCloudDataplexV1EnvironmentInput.prototype, "infrastructureSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1EnvironmentInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1EnvironmentSessionSpec)
    ], GoogleCloudDataplexV1EnvironmentInput.prototype, "sessionSpec", void 0);
    return GoogleCloudDataplexV1EnvironmentInput;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1EnvironmentInput };
