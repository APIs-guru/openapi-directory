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
export var EnvironmentTypeEnum;
(function (EnvironmentTypeEnum) {
    EnvironmentTypeEnum["User"] = "user";
    EnvironmentTypeEnum["Live"] = "live";
    EnvironmentTypeEnum["Latest"] = "latest";
    EnvironmentTypeEnum["Workspace"] = "workspace";
})(EnvironmentTypeEnum || (EnvironmentTypeEnum = {}));
// Environment
/**
 * Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.
**/
var Environment = /** @class */ (function (_super) {
    __extends(Environment, _super);
    function Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Environment.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationCode" }),
        __metadata("design:type", String)
    ], Environment.prototype, "authorizationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationTimestamp" }),
        __metadata("design:type", String)
    ], Environment.prototype, "authorizationTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerId" }),
        __metadata("design:type", String)
    ], Environment.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerVersionId" }),
        __metadata("design:type", String)
    ], Environment.prototype, "containerVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Environment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableDebug" }),
        __metadata("design:type", Boolean)
    ], Environment.prototype, "enableDebug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentId" }),
        __metadata("design:type", String)
    ], Environment.prototype, "environmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], Environment.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Environment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], Environment.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagManagerUrl" }),
        __metadata("design:type", String)
    ], Environment.prototype, "tagManagerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Environment.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Environment.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspaceId" }),
        __metadata("design:type", String)
    ], Environment.prototype, "workspaceId", void 0);
    return Environment;
}(SpeakeasyBase));
export { Environment };
