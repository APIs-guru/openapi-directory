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
var DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstAndThirdPartyAudienceId" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams.prototype, "firstAndThirdPartyAudienceId", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams };
var DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams };
var DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity };
var DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EditCustomerMatchMembersRequest)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest.prototype, "security", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest };
var DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse, _super);
    function DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EditCustomerMatchMembersResponse)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse.prototype, "editCustomerMatchMembersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse.prototype, "statusCode", void 0);
    return DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse;
}(SpeakeasyBase));
export { DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse };
