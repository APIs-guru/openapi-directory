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
var YoutubeChannelSectionsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsListQueryParams, _super);
    function YoutubeChannelSectionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], YoutubeChannelSectionsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mine" }),
        __metadata("design:type", Boolean)
    ], YoutubeChannelSectionsListQueryParams.prototype, "mine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeChannelSectionsListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeChannelSectionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeChannelSectionsListQueryParams;
}(SpeakeasyBase));
export { YoutubeChannelSectionsListQueryParams };
var YoutubeChannelSectionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsListSecurityOption1, _super);
    function YoutubeChannelSectionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelSectionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelSectionsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeChannelSectionsListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeChannelSectionsListSecurityOption1 };
var YoutubeChannelSectionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsListSecurityOption2, _super);
    function YoutubeChannelSectionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelSectionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelSectionsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeChannelSectionsListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeChannelSectionsListSecurityOption2 };
var YoutubeChannelSectionsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsListSecurityOption3, _super);
    function YoutubeChannelSectionsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelSectionsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelSectionsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeChannelSectionsListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeChannelSectionsListSecurityOption3 };
var YoutubeChannelSectionsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsListSecurityOption4, _super);
    function YoutubeChannelSectionsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelSectionsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelSectionsListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeChannelSectionsListSecurityOption4;
}(SpeakeasyBase));
export { YoutubeChannelSectionsListSecurityOption4 };
var YoutubeChannelSectionsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsListSecurity, _super);
    function YoutubeChannelSectionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelSectionsListSecurityOption1)
    ], YoutubeChannelSectionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelSectionsListSecurityOption2)
    ], YoutubeChannelSectionsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelSectionsListSecurityOption3)
    ], YoutubeChannelSectionsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelSectionsListSecurityOption4)
    ], YoutubeChannelSectionsListSecurity.prototype, "option4", void 0);
    return YoutubeChannelSectionsListSecurity;
}(SpeakeasyBase));
export { YoutubeChannelSectionsListSecurity };
var YoutubeChannelSectionsListRequest = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsListRequest, _super);
    function YoutubeChannelSectionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeChannelSectionsListQueryParams)
    ], YoutubeChannelSectionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeChannelSectionsListSecurity)
    ], YoutubeChannelSectionsListRequest.prototype, "security", void 0);
    return YoutubeChannelSectionsListRequest;
}(SpeakeasyBase));
export { YoutubeChannelSectionsListRequest };
var YoutubeChannelSectionsListResponse = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsListResponse, _super);
    function YoutubeChannelSectionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChannelSectionListResponse)
    ], YoutubeChannelSectionsListResponse.prototype, "channelSectionListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeChannelSectionsListResponse.prototype, "statusCode", void 0);
    return YoutubeChannelSectionsListResponse;
}(SpeakeasyBase));
export { YoutubeChannelSectionsListResponse };
