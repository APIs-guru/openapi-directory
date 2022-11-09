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
var StorageObjectsWatchAllPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsWatchAllPathParams, _super);
    function StorageObjectsWatchAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllPathParams.prototype, "bucket", void 0);
    return StorageObjectsWatchAllPathParams;
}(SpeakeasyBase));
export { StorageObjectsWatchAllPathParams };
export var StorageObjectsWatchAllProjectionEnum;
(function (StorageObjectsWatchAllProjectionEnum) {
    StorageObjectsWatchAllProjectionEnum["Full"] = "full";
    StorageObjectsWatchAllProjectionEnum["NoAcl"] = "noAcl";
})(StorageObjectsWatchAllProjectionEnum || (StorageObjectsWatchAllProjectionEnum = {}));
var StorageObjectsWatchAllQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsWatchAllQueryParams, _super);
    function StorageObjectsWatchAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=delimiter" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "delimiter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endOffset" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "endOffset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=includeTrailingDelimiter" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsWatchAllQueryParams.prototype, "includeTrailingDelimiter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], StorageObjectsWatchAllQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prefix" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "prefix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsWatchAllQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "projection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startOffset" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "startOffset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "userIp", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllQueryParams.prototype, "userProject", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=versions" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsWatchAllQueryParams.prototype, "versions", void 0);
    return StorageObjectsWatchAllQueryParams;
}(SpeakeasyBase));
export { StorageObjectsWatchAllQueryParams };
var StorageObjectsWatchAllSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsWatchAllSecurityOption1, _super);
    function StorageObjectsWatchAllSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsWatchAllSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsWatchAllSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsWatchAllSecurityOption1;
}(SpeakeasyBase));
export { StorageObjectsWatchAllSecurityOption1 };
var StorageObjectsWatchAllSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsWatchAllSecurityOption2, _super);
    function StorageObjectsWatchAllSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsWatchAllSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsWatchAllSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsWatchAllSecurityOption2;
}(SpeakeasyBase));
export { StorageObjectsWatchAllSecurityOption2 };
var StorageObjectsWatchAllSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageObjectsWatchAllSecurityOption3, _super);
    function StorageObjectsWatchAllSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsWatchAllSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsWatchAllSecurityOption3.prototype, "oauth2c", void 0);
    return StorageObjectsWatchAllSecurityOption3;
}(SpeakeasyBase));
export { StorageObjectsWatchAllSecurityOption3 };
var StorageObjectsWatchAllSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageObjectsWatchAllSecurityOption4, _super);
    function StorageObjectsWatchAllSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsWatchAllSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsWatchAllSecurityOption4.prototype, "oauth2c", void 0);
    return StorageObjectsWatchAllSecurityOption4;
}(SpeakeasyBase));
export { StorageObjectsWatchAllSecurityOption4 };
var StorageObjectsWatchAllSecurityOption5 = /** @class */ (function (_super) {
    __extends(StorageObjectsWatchAllSecurityOption5, _super);
    function StorageObjectsWatchAllSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsWatchAllSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsWatchAllSecurityOption5.prototype, "oauth2c", void 0);
    return StorageObjectsWatchAllSecurityOption5;
}(SpeakeasyBase));
export { StorageObjectsWatchAllSecurityOption5 };
var StorageObjectsWatchAllSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsWatchAllSecurity, _super);
    function StorageObjectsWatchAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsWatchAllSecurityOption1)
    ], StorageObjectsWatchAllSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsWatchAllSecurityOption2)
    ], StorageObjectsWatchAllSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsWatchAllSecurityOption3)
    ], StorageObjectsWatchAllSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsWatchAllSecurityOption4)
    ], StorageObjectsWatchAllSecurity.prototype, "option4", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsWatchAllSecurityOption5)
    ], StorageObjectsWatchAllSecurity.prototype, "option5", void 0);
    return StorageObjectsWatchAllSecurity;
}(SpeakeasyBase));
export { StorageObjectsWatchAllSecurity };
var StorageObjectsWatchAllRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsWatchAllRequest, _super);
    function StorageObjectsWatchAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsWatchAllPathParams)
    ], StorageObjectsWatchAllRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsWatchAllQueryParams)
    ], StorageObjectsWatchAllRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], StorageObjectsWatchAllRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsWatchAllSecurity)
    ], StorageObjectsWatchAllRequest.prototype, "security", void 0);
    return StorageObjectsWatchAllRequest;
}(SpeakeasyBase));
export { StorageObjectsWatchAllRequest };
var StorageObjectsWatchAllResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsWatchAllResponse, _super);
    function StorageObjectsWatchAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Channel)
    ], StorageObjectsWatchAllResponse.prototype, "channel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageObjectsWatchAllResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageObjectsWatchAllResponse.prototype, "statusCode", void 0);
    return StorageObjectsWatchAllResponse;
}(SpeakeasyBase));
export { StorageObjectsWatchAllResponse };
