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
var FitnessUsersDataSourcesCreatePathParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreatePathParams, _super);
    function FitnessUsersDataSourcesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreatePathParams.prototype, "userId", void 0);
    return FitnessUsersDataSourcesCreatePathParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreatePathParams };
var FitnessUsersDataSourcesCreateQueryParams = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateQueryParams, _super);
    function FitnessUsersDataSourcesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FitnessUsersDataSourcesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FitnessUsersDataSourcesCreateQueryParams;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateQueryParams };
var FitnessUsersDataSourcesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurityOption1, _super);
    function FitnessUsersDataSourcesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesCreateSecurityOption1;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurityOption1 };
var FitnessUsersDataSourcesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurityOption2, _super);
    function FitnessUsersDataSourcesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesCreateSecurityOption2;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurityOption2 };
var FitnessUsersDataSourcesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurityOption3, _super);
    function FitnessUsersDataSourcesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesCreateSecurityOption3;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurityOption3 };
var FitnessUsersDataSourcesCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurityOption4, _super);
    function FitnessUsersDataSourcesCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesCreateSecurityOption4.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesCreateSecurityOption4;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurityOption4 };
var FitnessUsersDataSourcesCreateSecurityOption5 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurityOption5, _super);
    function FitnessUsersDataSourcesCreateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesCreateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesCreateSecurityOption5.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesCreateSecurityOption5;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurityOption5 };
var FitnessUsersDataSourcesCreateSecurityOption6 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurityOption6, _super);
    function FitnessUsersDataSourcesCreateSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesCreateSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesCreateSecurityOption6.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesCreateSecurityOption6;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurityOption6 };
var FitnessUsersDataSourcesCreateSecurityOption7 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurityOption7, _super);
    function FitnessUsersDataSourcesCreateSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesCreateSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesCreateSecurityOption7.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesCreateSecurityOption7;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurityOption7 };
var FitnessUsersDataSourcesCreateSecurityOption8 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurityOption8, _super);
    function FitnessUsersDataSourcesCreateSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesCreateSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesCreateSecurityOption8.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesCreateSecurityOption8;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurityOption8 };
var FitnessUsersDataSourcesCreateSecurityOption9 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurityOption9, _super);
    function FitnessUsersDataSourcesCreateSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesCreateSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesCreateSecurityOption9.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesCreateSecurityOption9;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurityOption9 };
var FitnessUsersDataSourcesCreateSecurityOption10 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurityOption10, _super);
    function FitnessUsersDataSourcesCreateSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesCreateSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesCreateSecurityOption10.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesCreateSecurityOption10;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurityOption10 };
var FitnessUsersDataSourcesCreateSecurityOption11 = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurityOption11, _super);
    function FitnessUsersDataSourcesCreateSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FitnessUsersDataSourcesCreateSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FitnessUsersDataSourcesCreateSecurityOption11.prototype, "oauth2c", void 0);
    return FitnessUsersDataSourcesCreateSecurityOption11;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurityOption11 };
var FitnessUsersDataSourcesCreateSecurity = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateSecurity, _super);
    function FitnessUsersDataSourcesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurityOption1)
    ], FitnessUsersDataSourcesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurityOption2)
    ], FitnessUsersDataSourcesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurityOption3)
    ], FitnessUsersDataSourcesCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurityOption4)
    ], FitnessUsersDataSourcesCreateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurityOption5)
    ], FitnessUsersDataSourcesCreateSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurityOption6)
    ], FitnessUsersDataSourcesCreateSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurityOption7)
    ], FitnessUsersDataSourcesCreateSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurityOption8)
    ], FitnessUsersDataSourcesCreateSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurityOption9)
    ], FitnessUsersDataSourcesCreateSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurityOption10)
    ], FitnessUsersDataSourcesCreateSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurityOption11)
    ], FitnessUsersDataSourcesCreateSecurity.prototype, "option11", void 0);
    return FitnessUsersDataSourcesCreateSecurity;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateSecurity };
var FitnessUsersDataSourcesCreateRequest = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateRequest, _super);
    function FitnessUsersDataSourcesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesCreatePathParams)
    ], FitnessUsersDataSourcesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesCreateQueryParams)
    ], FitnessUsersDataSourcesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DataSource)
    ], FitnessUsersDataSourcesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FitnessUsersDataSourcesCreateSecurity)
    ], FitnessUsersDataSourcesCreateRequest.prototype, "security", void 0);
    return FitnessUsersDataSourcesCreateRequest;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateRequest };
var FitnessUsersDataSourcesCreateResponse = /** @class */ (function (_super) {
    __extends(FitnessUsersDataSourcesCreateResponse, _super);
    function FitnessUsersDataSourcesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FitnessUsersDataSourcesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DataSource)
    ], FitnessUsersDataSourcesCreateResponse.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FitnessUsersDataSourcesCreateResponse.prototype, "statusCode", void 0);
    return FitnessUsersDataSourcesCreateResponse;
}(SpeakeasyBase));
export { FitnessUsersDataSourcesCreateResponse };
