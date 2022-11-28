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
var YoutubeChannelSectionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsDeleteQueryParams, _super);
    function YoutubeChannelSectionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeChannelSectionsDeleteQueryParams;
}(SpeakeasyBase));
export { YoutubeChannelSectionsDeleteQueryParams };
var YoutubeChannelSectionsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsDeleteSecurityOption1, _super);
    function YoutubeChannelSectionsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelSectionsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelSectionsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeChannelSectionsDeleteSecurityOption1;
}(SpeakeasyBase));
export { YoutubeChannelSectionsDeleteSecurityOption1 };
var YoutubeChannelSectionsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsDeleteSecurityOption2, _super);
    function YoutubeChannelSectionsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelSectionsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelSectionsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeChannelSectionsDeleteSecurityOption2;
}(SpeakeasyBase));
export { YoutubeChannelSectionsDeleteSecurityOption2 };
var YoutubeChannelSectionsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsDeleteSecurityOption3, _super);
    function YoutubeChannelSectionsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelSectionsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelSectionsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeChannelSectionsDeleteSecurityOption3;
}(SpeakeasyBase));
export { YoutubeChannelSectionsDeleteSecurityOption3 };
var YoutubeChannelSectionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsDeleteSecurity, _super);
    function YoutubeChannelSectionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelSectionsDeleteSecurityOption1)
    ], YoutubeChannelSectionsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelSectionsDeleteSecurityOption2)
    ], YoutubeChannelSectionsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelSectionsDeleteSecurityOption3)
    ], YoutubeChannelSectionsDeleteSecurity.prototype, "option3", void 0);
    return YoutubeChannelSectionsDeleteSecurity;
}(SpeakeasyBase));
export { YoutubeChannelSectionsDeleteSecurity };
var YoutubeChannelSectionsDeleteRequest = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsDeleteRequest, _super);
    function YoutubeChannelSectionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeChannelSectionsDeleteQueryParams)
    ], YoutubeChannelSectionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeChannelSectionsDeleteSecurity)
    ], YoutubeChannelSectionsDeleteRequest.prototype, "security", void 0);
    return YoutubeChannelSectionsDeleteRequest;
}(SpeakeasyBase));
export { YoutubeChannelSectionsDeleteRequest };
var YoutubeChannelSectionsDeleteResponse = /** @class */ (function (_super) {
    __extends(YoutubeChannelSectionsDeleteResponse, _super);
    function YoutubeChannelSectionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeChannelSectionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeChannelSectionsDeleteResponse.prototype, "statusCode", void 0);
    return YoutubeChannelSectionsDeleteResponse;
}(SpeakeasyBase));
export { YoutubeChannelSectionsDeleteResponse };
