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
var SmartdevicemanagementEnterprisesStructuresRoomsGetPathParams = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesStructuresRoomsGetPathParams, _super);
    function SmartdevicemanagementEnterprisesStructuresRoomsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetPathParams.prototype, "name", void 0);
    return SmartdevicemanagementEnterprisesStructuresRoomsGetPathParams;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesStructuresRoomsGetPathParams };
var SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams, _super);
    function SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams.prototype, "uploadProtocol", void 0);
    return SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams };
var SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity, _super);
    function SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity.prototype, "oauth2c", void 0);
    return SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity };
var SmartdevicemanagementEnterprisesStructuresRoomsGetRequest = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesStructuresRoomsGetRequest, _super);
    function SmartdevicemanagementEnterprisesStructuresRoomsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SmartdevicemanagementEnterprisesStructuresRoomsGetPathParams)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SmartdevicemanagementEnterprisesStructuresRoomsGetQueryParams)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetRequest.prototype, "security", void 0);
    return SmartdevicemanagementEnterprisesStructuresRoomsGetRequest;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesStructuresRoomsGetRequest };
var SmartdevicemanagementEnterprisesStructuresRoomsGetResponse = /** @class */ (function (_super) {
    __extends(SmartdevicemanagementEnterprisesStructuresRoomsGetResponse, _super);
    function SmartdevicemanagementEnterprisesStructuresRoomsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleHomeEnterpriseSdmV1Room)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetResponse.prototype, "googleHomeEnterpriseSdmV1Room", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SmartdevicemanagementEnterprisesStructuresRoomsGetResponse.prototype, "statusCode", void 0);
    return SmartdevicemanagementEnterprisesStructuresRoomsGetResponse;
}(SpeakeasyBase));
export { SmartdevicemanagementEnterprisesStructuresRoomsGetResponse };
