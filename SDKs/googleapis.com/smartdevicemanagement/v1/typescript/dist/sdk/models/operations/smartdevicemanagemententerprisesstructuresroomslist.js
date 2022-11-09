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
var SmartdevicemanagementEnterprisesStructuresRoomsListPathParams = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesStructuresRoomsListPathParams, _super);
    function SmartdevicemanagementEnterprisesStructuresRoomsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListPathParams.prototype, "parent", void 0);
    return SmartdevicemanagementEnterprisesStructuresRoomsListPathParams;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesStructuresRoomsListPathParams };
var SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams, _super);
    function SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams.prototype, "uploadProtocol", void 0);
    return SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams };
var SmartdevicemanagementEnterprisesStructuresRoomsListSecurity = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesStructuresRoomsListSecurity, _super);
    function SmartdevicemanagementEnterprisesStructuresRoomsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListSecurity.prototype, "oauth2c", void 0);
    return SmartdevicemanagementEnterprisesStructuresRoomsListSecurity;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesStructuresRoomsListSecurity };
var SmartdevicemanagementEnterprisesStructuresRoomsListRequest = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesStructuresRoomsListRequest, _super);
    function SmartdevicemanagementEnterprisesStructuresRoomsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SmartdevicemanagementEnterprisesStructuresRoomsListPathParams)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SmartdevicemanagementEnterprisesStructuresRoomsListQueryParams)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SmartdevicemanagementEnterprisesStructuresRoomsListSecurity)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListRequest.prototype, "security", void 0);
    return SmartdevicemanagementEnterprisesStructuresRoomsListRequest;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesStructuresRoomsListRequest };
var SmartdevicemanagementEnterprisesStructuresRoomsListResponse = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesStructuresRoomsListResponse, _super);
    function SmartdevicemanagementEnterprisesStructuresRoomsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleHomeEnterpriseSdmV1ListRoomsResponse)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListResponse.prototype, "googleHomeEnterpriseSdmV1ListRoomsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SmartdevicemanagementEnterprisesStructuresRoomsListResponse.prototype, "statusCode", void 0);
    return SmartdevicemanagementEnterprisesStructuresRoomsListResponse;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesStructuresRoomsListResponse };
