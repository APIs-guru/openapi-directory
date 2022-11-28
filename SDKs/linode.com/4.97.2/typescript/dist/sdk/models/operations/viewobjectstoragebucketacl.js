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
export var ViewObjectStorageBucketAclServerList = [
    "https://api.linode.com/v4",
];
var ViewObjectStorageBucketAclPathParams = /** @class */ (function (_super) {
    __extends(ViewObjectStorageBucketAclPathParams, _super);
    function ViewObjectStorageBucketAclPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], ViewObjectStorageBucketAclPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], ViewObjectStorageBucketAclPathParams.prototype, "clusterId", void 0);
    return ViewObjectStorageBucketAclPathParams;
}(SpeakeasyBase));
export { ViewObjectStorageBucketAclPathParams };
var ViewObjectStorageBucketAclQueryParams = /** @class */ (function (_super) {
    __extends(ViewObjectStorageBucketAclQueryParams, _super);
    function ViewObjectStorageBucketAclQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ViewObjectStorageBucketAclQueryParams.prototype, "name", void 0);
    return ViewObjectStorageBucketAclQueryParams;
}(SpeakeasyBase));
export { ViewObjectStorageBucketAclQueryParams };
var ViewObjectStorageBucketAclSecurity = /** @class */ (function (_super) {
    __extends(ViewObjectStorageBucketAclSecurity, _super);
    function ViewObjectStorageBucketAclSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], ViewObjectStorageBucketAclSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], ViewObjectStorageBucketAclSecurity.prototype, "oauth", void 0);
    return ViewObjectStorageBucketAclSecurity;
}(SpeakeasyBase));
export { ViewObjectStorageBucketAclSecurity };
export var ViewObjectStorageBucketAcl200ApplicationJsonAclEnum;
(function (ViewObjectStorageBucketAcl200ApplicationJsonAclEnum) {
    ViewObjectStorageBucketAcl200ApplicationJsonAclEnum["Private"] = "private";
    ViewObjectStorageBucketAcl200ApplicationJsonAclEnum["PublicRead"] = "public-read";
    ViewObjectStorageBucketAcl200ApplicationJsonAclEnum["AuthenticatedRead"] = "authenticated-read";
    ViewObjectStorageBucketAcl200ApplicationJsonAclEnum["PublicReadWrite"] = "public-read-write";
    ViewObjectStorageBucketAcl200ApplicationJsonAclEnum["Custom"] = "custom";
})(ViewObjectStorageBucketAcl200ApplicationJsonAclEnum || (ViewObjectStorageBucketAcl200ApplicationJsonAclEnum = {}));
var ViewObjectStorageBucketAcl200ApplicationJson = /** @class */ (function (_super) {
    __extends(ViewObjectStorageBucketAcl200ApplicationJson, _super);
    function ViewObjectStorageBucketAcl200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acl" }),
        __metadata("design:type", String)
    ], ViewObjectStorageBucketAcl200ApplicationJson.prototype, "acl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acl_xml" }),
        __metadata("design:type", String)
    ], ViewObjectStorageBucketAcl200ApplicationJson.prototype, "aclXml", void 0);
    return ViewObjectStorageBucketAcl200ApplicationJson;
}(SpeakeasyBase));
export { ViewObjectStorageBucketAcl200ApplicationJson };
var ViewObjectStorageBucketAclDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(ViewObjectStorageBucketAclDefaultApplicationJson, _super);
    function ViewObjectStorageBucketAclDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], ViewObjectStorageBucketAclDefaultApplicationJson.prototype, "errors", void 0);
    return ViewObjectStorageBucketAclDefaultApplicationJson;
}(SpeakeasyBase));
export { ViewObjectStorageBucketAclDefaultApplicationJson };
var ViewObjectStorageBucketAclRequest = /** @class */ (function (_super) {
    __extends(ViewObjectStorageBucketAclRequest, _super);
    function ViewObjectStorageBucketAclRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ViewObjectStorageBucketAclRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ViewObjectStorageBucketAclPathParams)
    ], ViewObjectStorageBucketAclRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ViewObjectStorageBucketAclQueryParams)
    ], ViewObjectStorageBucketAclRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ViewObjectStorageBucketAclSecurity)
    ], ViewObjectStorageBucketAclRequest.prototype, "security", void 0);
    return ViewObjectStorageBucketAclRequest;
}(SpeakeasyBase));
export { ViewObjectStorageBucketAclRequest };
var ViewObjectStorageBucketAclResponse = /** @class */ (function (_super) {
    __extends(ViewObjectStorageBucketAclResponse, _super);
    function ViewObjectStorageBucketAclResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ViewObjectStorageBucketAclResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ViewObjectStorageBucketAclResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ViewObjectStorageBucketAcl200ApplicationJson)
    ], ViewObjectStorageBucketAclResponse.prototype, "viewObjectStorageBucketAcl200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ViewObjectStorageBucketAclDefaultApplicationJson)
    ], ViewObjectStorageBucketAclResponse.prototype, "viewObjectStorageBucketAclDefaultApplicationJsonObject", void 0);
    return ViewObjectStorageBucketAclResponse;
}(SpeakeasyBase));
export { ViewObjectStorageBucketAclResponse };
