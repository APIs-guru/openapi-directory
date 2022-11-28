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
var CreateLinodeInstanceRequestBody = /** @class */ (function (_super) {
    __extends(CreateLinodeInstanceRequestBody, _super);
    function CreateLinodeInstanceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorized_keys" }),
        __metadata("design:type", Array)
    ], CreateLinodeInstanceRequestBody.prototype, "authorizedKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorized_users" }),
        __metadata("design:type", Array)
    ], CreateLinodeInstanceRequestBody.prototype, "authorizedUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backup_id" }),
        __metadata("design:type", Number)
    ], CreateLinodeInstanceRequestBody.prototype, "backupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backups_enabled" }),
        __metadata("design:type", Boolean)
    ], CreateLinodeInstanceRequestBody.prototype, "backupsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booted" }),
        __metadata("design:type", Boolean)
    ], CreateLinodeInstanceRequestBody.prototype, "booted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], CreateLinodeInstanceRequestBody.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], CreateLinodeInstanceRequestBody.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interfaces", elemType: shared.LinodeConfigInterface }),
        __metadata("design:type", Array)
    ], CreateLinodeInstanceRequestBody.prototype, "interfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CreateLinodeInstanceRequestBody.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_ip" }),
        __metadata("design:type", Boolean)
    ], CreateLinodeInstanceRequestBody.prototype, "privateIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CreateLinodeInstanceRequestBody.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root_pass" }),
        __metadata("design:type", String)
    ], CreateLinodeInstanceRequestBody.prototype, "rootPass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stackscript_data" }),
        __metadata("design:type", Map)
    ], CreateLinodeInstanceRequestBody.prototype, "stackscriptData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stackscript_id" }),
        __metadata("design:type", Number)
    ], CreateLinodeInstanceRequestBody.prototype, "stackscriptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=swap_size" }),
        __metadata("design:type", Number)
    ], CreateLinodeInstanceRequestBody.prototype, "swapSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CreateLinodeInstanceRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateLinodeInstanceRequestBody.prototype, "type", void 0);
    return CreateLinodeInstanceRequestBody;
}(SpeakeasyBase));
export { CreateLinodeInstanceRequestBody };
var CreateLinodeInstanceSecurity = /** @class */ (function (_super) {
    __extends(CreateLinodeInstanceSecurity, _super);
    function CreateLinodeInstanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateLinodeInstanceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateLinodeInstanceSecurity.prototype, "oauth", void 0);
    return CreateLinodeInstanceSecurity;
}(SpeakeasyBase));
export { CreateLinodeInstanceSecurity };
var CreateLinodeInstanceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateLinodeInstanceDefaultApplicationJson, _super);
    function CreateLinodeInstanceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateLinodeInstanceDefaultApplicationJson.prototype, "errors", void 0);
    return CreateLinodeInstanceDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateLinodeInstanceDefaultApplicationJson };
var CreateLinodeInstanceRequest = /** @class */ (function (_super) {
    __extends(CreateLinodeInstanceRequest, _super);
    function CreateLinodeInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateLinodeInstanceRequestBody)
    ], CreateLinodeInstanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateLinodeInstanceSecurity)
    ], CreateLinodeInstanceRequest.prototype, "security", void 0);
    return CreateLinodeInstanceRequest;
}(SpeakeasyBase));
export { CreateLinodeInstanceRequest };
var CreateLinodeInstanceResponse = /** @class */ (function (_super) {
    __extends(CreateLinodeInstanceResponse, _super);
    function CreateLinodeInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateLinodeInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Linode)
    ], CreateLinodeInstanceResponse.prototype, "linode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateLinodeInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateLinodeInstanceDefaultApplicationJson)
    ], CreateLinodeInstanceResponse.prototype, "createLinodeInstanceDefaultApplicationJsonObject", void 0);
    return CreateLinodeInstanceResponse;
}(SpeakeasyBase));
export { CreateLinodeInstanceResponse };
