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
var ReplicapoolPoolsListPathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsListPathParams, _super);
    function ReplicapoolPoolsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsListPathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsListPathParams.prototype, "zone", void 0);
    return ReplicapoolPoolsListPathParams;
}(SpeakeasyBase));
export { ReplicapoolPoolsListPathParams };
var ReplicapoolPoolsListQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsListQueryParams, _super);
    function ReplicapoolPoolsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ReplicapoolPoolsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolPoolsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsListQueryParams.prototype, "userIp", void 0);
    return ReplicapoolPoolsListQueryParams;
}(SpeakeasyBase));
export { ReplicapoolPoolsListQueryParams };
var ReplicapoolPoolsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsListSecurityOption1, _super);
    function ReplicapoolPoolsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsListSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsListSecurityOption1;
}(SpeakeasyBase));
export { ReplicapoolPoolsListSecurityOption1 };
var ReplicapoolPoolsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsListSecurityOption2, _super);
    function ReplicapoolPoolsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsListSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsListSecurityOption2;
}(SpeakeasyBase));
export { ReplicapoolPoolsListSecurityOption2 };
var ReplicapoolPoolsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsListSecurityOption3, _super);
    function ReplicapoolPoolsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsListSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsListSecurityOption3;
}(SpeakeasyBase));
export { ReplicapoolPoolsListSecurityOption3 };
var ReplicapoolPoolsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsListSecurityOption4, _super);
    function ReplicapoolPoolsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsListSecurityOption4.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsListSecurityOption4;
}(SpeakeasyBase));
export { ReplicapoolPoolsListSecurityOption4 };
var ReplicapoolPoolsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsListSecurityOption5, _super);
    function ReplicapoolPoolsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsListSecurityOption5.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsListSecurityOption5;
}(SpeakeasyBase));
export { ReplicapoolPoolsListSecurityOption5 };
var ReplicapoolPoolsListSecurityOption6 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsListSecurityOption6, _super);
    function ReplicapoolPoolsListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsListSecurityOption6.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsListSecurityOption6;
}(SpeakeasyBase));
export { ReplicapoolPoolsListSecurityOption6 };
var ReplicapoolPoolsListSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsListSecurity, _super);
    function ReplicapoolPoolsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsListSecurityOption1)
    ], ReplicapoolPoolsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsListSecurityOption2)
    ], ReplicapoolPoolsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsListSecurityOption3)
    ], ReplicapoolPoolsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsListSecurityOption4)
    ], ReplicapoolPoolsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsListSecurityOption5)
    ], ReplicapoolPoolsListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsListSecurityOption6)
    ], ReplicapoolPoolsListSecurity.prototype, "option6", void 0);
    return ReplicapoolPoolsListSecurity;
}(SpeakeasyBase));
export { ReplicapoolPoolsListSecurity };
var ReplicapoolPoolsListRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsListRequest, _super);
    function ReplicapoolPoolsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolPoolsListPathParams)
    ], ReplicapoolPoolsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolPoolsListQueryParams)
    ], ReplicapoolPoolsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolPoolsListSecurity)
    ], ReplicapoolPoolsListRequest.prototype, "security", void 0);
    return ReplicapoolPoolsListRequest;
}(SpeakeasyBase));
export { ReplicapoolPoolsListRequest };
var ReplicapoolPoolsListResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsListResponse, _super);
    function ReplicapoolPoolsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReplicapoolPoolsListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicapoolPoolsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplicapoolPoolsListResponse.prototype, "statusCode", void 0);
    return ReplicapoolPoolsListResponse;
}(SpeakeasyBase));
export { ReplicapoolPoolsListResponse };
