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
export var YoutubeVideosListChartEnum;
(function (YoutubeVideosListChartEnum) {
    YoutubeVideosListChartEnum["ChartUnspecified"] = "chartUnspecified";
    YoutubeVideosListChartEnum["MostPopular"] = "mostPopular";
})(YoutubeVideosListChartEnum || (YoutubeVideosListChartEnum = {}));
export var YoutubeVideosListMyRatingEnum;
(function (YoutubeVideosListMyRatingEnum) {
    YoutubeVideosListMyRatingEnum["None"] = "none";
    YoutubeVideosListMyRatingEnum["Like"] = "like";
    YoutubeVideosListMyRatingEnum["Dislike"] = "dislike";
})(YoutubeVideosListMyRatingEnum || (YoutubeVideosListMyRatingEnum = {}));
var YoutubeVideosListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeVideosListQueryParams, _super);
    function YoutubeVideosListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chart" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "chart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], YoutubeVideosListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxHeight" }),
        __metadata("design:type", Number)
    ], YoutubeVideosListQueryParams.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], YoutubeVideosListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxWidth" }),
        __metadata("design:type", Number)
    ], YoutubeVideosListQueryParams.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=myRating" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "myRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeVideosListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeVideosListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionCode" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "regionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoCategoryId" }),
        __metadata("design:type", String)
    ], YoutubeVideosListQueryParams.prototype, "videoCategoryId", void 0);
    return YoutubeVideosListQueryParams;
}(SpeakeasyBase));
export { YoutubeVideosListQueryParams };
var YoutubeVideosListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeVideosListSecurityOption1, _super);
    function YoutubeVideosListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeVideosListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeVideosListSecurityOption1 };
var YoutubeVideosListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeVideosListSecurityOption2, _super);
    function YoutubeVideosListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeVideosListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeVideosListSecurityOption2 };
var YoutubeVideosListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeVideosListSecurityOption3, _super);
    function YoutubeVideosListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeVideosListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeVideosListSecurityOption3 };
var YoutubeVideosListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeVideosListSecurityOption4, _super);
    function YoutubeVideosListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeVideosListSecurityOption4;
}(SpeakeasyBase));
export { YoutubeVideosListSecurityOption4 };
var YoutubeVideosListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeVideosListSecurity, _super);
    function YoutubeVideosListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosListSecurityOption1)
    ], YoutubeVideosListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosListSecurityOption2)
    ], YoutubeVideosListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosListSecurityOption3)
    ], YoutubeVideosListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosListSecurityOption4)
    ], YoutubeVideosListSecurity.prototype, "option4", void 0);
    return YoutubeVideosListSecurity;
}(SpeakeasyBase));
export { YoutubeVideosListSecurity };
var YoutubeVideosListRequest = /** @class */ (function (_super) {
    __extends(YoutubeVideosListRequest, _super);
    function YoutubeVideosListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideosListQueryParams)
    ], YoutubeVideosListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideosListSecurity)
    ], YoutubeVideosListRequest.prototype, "security", void 0);
    return YoutubeVideosListRequest;
}(SpeakeasyBase));
export { YoutubeVideosListRequest };
var YoutubeVideosListResponse = /** @class */ (function (_super) {
    __extends(YoutubeVideosListResponse, _super);
    function YoutubeVideosListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeVideosListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeVideosListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VideoListResponse)
    ], YoutubeVideosListResponse.prototype, "videoListResponse", void 0);
    return YoutubeVideosListResponse;
}(SpeakeasyBase));
export { YoutubeVideosListResponse };
