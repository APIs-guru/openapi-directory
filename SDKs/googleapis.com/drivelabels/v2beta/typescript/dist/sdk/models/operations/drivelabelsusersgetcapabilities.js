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
var DrivelabelsUsersGetCapabilitiesPathParams = /** @class */ (function (_super) {
    __extends(DrivelabelsUsersGetCapabilitiesPathParams, _super);
    function DrivelabelsUsersGetCapabilitiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesPathParams.prototype, "name", void 0);
    return DrivelabelsUsersGetCapabilitiesPathParams;
}(SpeakeasyBase));
export { DrivelabelsUsersGetCapabilitiesPathParams };
export var DrivelabelsUsersGetCapabilitiesViewEnum;
(function (DrivelabelsUsersGetCapabilitiesViewEnum) {
    DrivelabelsUsersGetCapabilitiesViewEnum["LabelViewBasic"] = "LABEL_VIEW_BASIC";
    DrivelabelsUsersGetCapabilitiesViewEnum["LabelViewFull"] = "LABEL_VIEW_FULL";
})(DrivelabelsUsersGetCapabilitiesViewEnum || (DrivelabelsUsersGetCapabilitiesViewEnum = {}));
var DrivelabelsUsersGetCapabilitiesQueryParams = /** @class */ (function (_super) {
    __extends(DrivelabelsUsersGetCapabilitiesQueryParams, _super);
    function DrivelabelsUsersGetCapabilitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "useAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesQueryParams.prototype, "view", void 0);
    return DrivelabelsUsersGetCapabilitiesQueryParams;
}(SpeakeasyBase));
export { DrivelabelsUsersGetCapabilitiesQueryParams };
var DrivelabelsUsersGetCapabilitiesRequest = /** @class */ (function (_super) {
    __extends(DrivelabelsUsersGetCapabilitiesRequest, _super);
    function DrivelabelsUsersGetCapabilitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsUsersGetCapabilitiesPathParams)
    ], DrivelabelsUsersGetCapabilitiesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsUsersGetCapabilitiesQueryParams)
    ], DrivelabelsUsersGetCapabilitiesRequest.prototype, "queryParams", void 0);
    return DrivelabelsUsersGetCapabilitiesRequest;
}(SpeakeasyBase));
export { DrivelabelsUsersGetCapabilitiesRequest };
var DrivelabelsUsersGetCapabilitiesResponse = /** @class */ (function (_super) {
    __extends(DrivelabelsUsersGetCapabilitiesResponse, _super);
    function DrivelabelsUsersGetCapabilitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivelabelsUsersGetCapabilitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAppsDriveLabelsV2betaUserCapabilities)
    ], DrivelabelsUsersGetCapabilitiesResponse.prototype, "googleAppsDriveLabelsV2betaUserCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivelabelsUsersGetCapabilitiesResponse.prototype, "statusCode", void 0);
    return DrivelabelsUsersGetCapabilitiesResponse;
}(SpeakeasyBase));
export { DrivelabelsUsersGetCapabilitiesResponse };
