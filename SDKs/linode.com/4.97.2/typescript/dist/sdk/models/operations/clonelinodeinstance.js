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
import * as shared from "../shared";
var CloneLinodeInstancePathParams = /** @class */ (function (_super) {
    __extends(CloneLinodeInstancePathParams, _super);
    function CloneLinodeInstancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], CloneLinodeInstancePathParams.prototype, "linodeId", void 0);
    return CloneLinodeInstancePathParams;
}(SpeakeasyBase));
export { CloneLinodeInstancePathParams };
var CloneLinodeInstanceRequestBody = /** @class */ (function (_super) {
    __extends(CloneLinodeInstanceRequestBody, _super);
    function CloneLinodeInstanceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backups_enabled" }),
        __metadata("design:type", Boolean)
    ], CloneLinodeInstanceRequestBody.prototype, "backupsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configs" }),
        __metadata("design:type", Array)
    ], CloneLinodeInstanceRequestBody.prototype, "configs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disks" }),
        __metadata("design:type", Array)
    ], CloneLinodeInstanceRequestBody.prototype, "disks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], CloneLinodeInstanceRequestBody.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CloneLinodeInstanceRequestBody.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linode_id" }),
        __metadata("design:type", Number)
    ], CloneLinodeInstanceRequestBody.prototype, "linodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CloneLinodeInstanceRequestBody.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CloneLinodeInstanceRequestBody.prototype, "type", void 0);
    return CloneLinodeInstanceRequestBody;
}(SpeakeasyBase));
export { CloneLinodeInstanceRequestBody };
var CloneLinodeInstanceSecurity = /** @class */ (function (_super) {
    __extends(CloneLinodeInstanceSecurity, _super);
    function CloneLinodeInstanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CloneLinodeInstanceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CloneLinodeInstanceSecurity.prototype, "oauth", void 0);
    return CloneLinodeInstanceSecurity;
}(SpeakeasyBase));
export { CloneLinodeInstanceSecurity };
var CloneLinodeInstanceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CloneLinodeInstanceDefaultApplicationJson, _super);
    function CloneLinodeInstanceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CloneLinodeInstanceDefaultApplicationJson.prototype, "errors", void 0);
    return CloneLinodeInstanceDefaultApplicationJson;
}(SpeakeasyBase));
export { CloneLinodeInstanceDefaultApplicationJson };
var CloneLinodeInstanceRequest = /** @class */ (function (_super) {
    __extends(CloneLinodeInstanceRequest, _super);
    function CloneLinodeInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloneLinodeInstancePathParams)
    ], CloneLinodeInstanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CloneLinodeInstanceRequestBody)
    ], CloneLinodeInstanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloneLinodeInstanceSecurity)
    ], CloneLinodeInstanceRequest.prototype, "security", void 0);
    return CloneLinodeInstanceRequest;
}(SpeakeasyBase));
export { CloneLinodeInstanceRequest };
var CloneLinodeInstanceResponse = /** @class */ (function (_super) {
    __extends(CloneLinodeInstanceResponse, _super);
    function CloneLinodeInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloneLinodeInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Linode)
    ], CloneLinodeInstanceResponse.prototype, "linode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloneLinodeInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloneLinodeInstanceDefaultApplicationJson)
    ], CloneLinodeInstanceResponse.prototype, "cloneLinodeInstanceDefaultApplicationJsonObject", void 0);
    return CloneLinodeInstanceResponse;
}(SpeakeasyBase));
export { CloneLinodeInstanceResponse };
