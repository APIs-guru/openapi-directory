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
export var UpdateObjectStorageBucketAclServerList = [
    "https://api.linode.com/v4",
];
var UpdateObjectStorageBucketAclPathParams = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageBucketAclPathParams, _super);
    function UpdateObjectStorageBucketAclPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], UpdateObjectStorageBucketAclPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], UpdateObjectStorageBucketAclPathParams.prototype, "clusterId", void 0);
    return UpdateObjectStorageBucketAclPathParams;
}(SpeakeasyBase));
export { UpdateObjectStorageBucketAclPathParams };
var UpdateObjectStorageBucketAclSecurity = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageBucketAclSecurity, _super);
    function UpdateObjectStorageBucketAclSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateObjectStorageBucketAclSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateObjectStorageBucketAclSecurity.prototype, "oauth", void 0);
    return UpdateObjectStorageBucketAclSecurity;
}(SpeakeasyBase));
export { UpdateObjectStorageBucketAclSecurity };
export var UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum;
(function (UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum) {
    UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum["Private"] = "private";
    UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum["PublicRead"] = "public-read";
    UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum["AuthenticatedRead"] = "authenticated-read";
    UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum["PublicReadWrite"] = "public-read-write";
    UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum["Custom"] = "custom";
})(UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum || (UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum = {}));
var UpdateObjectStorageBucketAcl200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageBucketAcl200ApplicationJson, _super);
    function UpdateObjectStorageBucketAcl200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acl" }),
        __metadata("design:type", String)
    ], UpdateObjectStorageBucketAcl200ApplicationJson.prototype, "acl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acl_xml" }),
        __metadata("design:type", String)
    ], UpdateObjectStorageBucketAcl200ApplicationJson.prototype, "aclXml", void 0);
    return UpdateObjectStorageBucketAcl200ApplicationJson;
}(SpeakeasyBase));
export { UpdateObjectStorageBucketAcl200ApplicationJson };
var UpdateObjectStorageBucketAclDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageBucketAclDefaultApplicationJson, _super);
    function UpdateObjectStorageBucketAclDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateObjectStorageBucketAclDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateObjectStorageBucketAclDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateObjectStorageBucketAclDefaultApplicationJson };
var UpdateObjectStorageBucketAclRequest = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageBucketAclRequest, _super);
    function UpdateObjectStorageBucketAclRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateObjectStorageBucketAclRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateObjectStorageBucketAclPathParams)
    ], UpdateObjectStorageBucketAclRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdateObjectStorageBucketAclRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateObjectStorageBucketAclSecurity)
    ], UpdateObjectStorageBucketAclRequest.prototype, "security", void 0);
    return UpdateObjectStorageBucketAclRequest;
}(SpeakeasyBase));
export { UpdateObjectStorageBucketAclRequest };
var UpdateObjectStorageBucketAclResponse = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageBucketAclResponse, _super);
    function UpdateObjectStorageBucketAclResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateObjectStorageBucketAclResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateObjectStorageBucketAclResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateObjectStorageBucketAcl200ApplicationJson)
    ], UpdateObjectStorageBucketAclResponse.prototype, "updateObjectStorageBucketAcl200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateObjectStorageBucketAclDefaultApplicationJson)
    ], UpdateObjectStorageBucketAclResponse.prototype, "updateObjectStorageBucketAclDefaultApplicationJsonObject", void 0);
    return UpdateObjectStorageBucketAclResponse;
}(SpeakeasyBase));
export { UpdateObjectStorageBucketAclResponse };
