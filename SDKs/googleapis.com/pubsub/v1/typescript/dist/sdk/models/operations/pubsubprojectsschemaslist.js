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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PubsubProjectsSchemasListPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasListPathParams, _super);
    function PubsubProjectsSchemasListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListPathParams.prototype, "parent", void 0);
    return PubsubProjectsSchemasListPathParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasListPathParams };
export var PubsubProjectsSchemasListViewEnum;
(function (PubsubProjectsSchemasListViewEnum) {
    PubsubProjectsSchemasListViewEnum["SchemaViewUnspecified"] = "SCHEMA_VIEW_UNSPECIFIED";
    PubsubProjectsSchemasListViewEnum["Basic"] = "BASIC";
    PubsubProjectsSchemasListViewEnum["Full"] = "FULL";
})(PubsubProjectsSchemasListViewEnum || (PubsubProjectsSchemasListViewEnum = {}));
var PubsubProjectsSchemasListQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasListQueryParams, _super);
    function PubsubProjectsSchemasListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PubsubProjectsSchemasListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSchemasListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListQueryParams.prototype, "view", void 0);
    return PubsubProjectsSchemasListQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasListQueryParams };
var PubsubProjectsSchemasListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasListSecurityOption1, _super);
    function PubsubProjectsSchemasListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasListSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasListSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSchemasListSecurityOption1 };
var PubsubProjectsSchemasListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasListSecurityOption2, _super);
    function PubsubProjectsSchemasListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasListSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasListSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSchemasListSecurityOption2 };
var PubsubProjectsSchemasListSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasListSecurity, _super);
    function PubsubProjectsSchemasListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasListSecurityOption1)
    ], PubsubProjectsSchemasListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasListSecurityOption2)
    ], PubsubProjectsSchemasListSecurity.prototype, "option2", void 0);
    return PubsubProjectsSchemasListSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSchemasListSecurity };
var PubsubProjectsSchemasListRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasListRequest, _super);
    function PubsubProjectsSchemasListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSchemasListPathParams)
    ], PubsubProjectsSchemasListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSchemasListQueryParams)
    ], PubsubProjectsSchemasListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSchemasListSecurity)
    ], PubsubProjectsSchemasListRequest.prototype, "security", void 0);
    return PubsubProjectsSchemasListRequest;
}(SpeakeasyBase));
export { PubsubProjectsSchemasListRequest };
var PubsubProjectsSchemasListResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasListResponse, _super);
    function PubsubProjectsSchemasListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListSchemasResponse)
    ], PubsubProjectsSchemasListResponse.prototype, "listSchemasResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSchemasListResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSchemasListResponse;
}(SpeakeasyBase));
export { PubsubProjectsSchemasListResponse };
