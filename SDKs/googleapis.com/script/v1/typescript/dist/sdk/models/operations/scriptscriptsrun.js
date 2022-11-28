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
var ScriptScriptsRunPathParams = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunPathParams, _super);
    function ScriptScriptsRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" }),
        __metadata("design:type", String)
    ], ScriptScriptsRunPathParams.prototype, "scriptId", void 0);
    return ScriptScriptsRunPathParams;
}(SpeakeasyBase));
export { ScriptScriptsRunPathParams };
var ScriptScriptsRunQueryParams = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunQueryParams, _super);
    function ScriptScriptsRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ScriptScriptsRunQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ScriptScriptsRunQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ScriptScriptsRunQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ScriptScriptsRunQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ScriptScriptsRunQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ScriptScriptsRunQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ScriptScriptsRunQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ScriptScriptsRunQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ScriptScriptsRunQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ScriptScriptsRunQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ScriptScriptsRunQueryParams.prototype, "uploadProtocol", void 0);
    return ScriptScriptsRunQueryParams;
}(SpeakeasyBase));
export { ScriptScriptsRunQueryParams };
var ScriptScriptsRunSecurityOption1 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption1, _super);
    function ScriptScriptsRunSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption1.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption1;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption1 };
var ScriptScriptsRunSecurityOption2 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption2, _super);
    function ScriptScriptsRunSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption2.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption2;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption2 };
var ScriptScriptsRunSecurityOption3 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption3, _super);
    function ScriptScriptsRunSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption3.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption3;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption3 };
var ScriptScriptsRunSecurityOption4 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption4, _super);
    function ScriptScriptsRunSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption4.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption4;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption4 };
var ScriptScriptsRunSecurityOption5 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption5, _super);
    function ScriptScriptsRunSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption5.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption5;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption5 };
var ScriptScriptsRunSecurityOption6 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption6, _super);
    function ScriptScriptsRunSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption6.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption6;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption6 };
var ScriptScriptsRunSecurityOption7 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption7, _super);
    function ScriptScriptsRunSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption7.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption7;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption7 };
var ScriptScriptsRunSecurityOption8 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption8, _super);
    function ScriptScriptsRunSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption8.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption8;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption8 };
var ScriptScriptsRunSecurityOption9 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption9, _super);
    function ScriptScriptsRunSecurityOption9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption9.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption9.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption9;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption9 };
var ScriptScriptsRunSecurityOption10 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption10, _super);
    function ScriptScriptsRunSecurityOption10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption10.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption10.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption10;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption10 };
var ScriptScriptsRunSecurityOption11 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption11, _super);
    function ScriptScriptsRunSecurityOption11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption11.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption11.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption11;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption11 };
var ScriptScriptsRunSecurityOption12 = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurityOption12, _super);
    function ScriptScriptsRunSecurityOption12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptScriptsRunSecurityOption12.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptScriptsRunSecurityOption12.prototype, "oauth2c", void 0);
    return ScriptScriptsRunSecurityOption12;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurityOption12 };
var ScriptScriptsRunSecurity = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunSecurity, _super);
    function ScriptScriptsRunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption1)
    ], ScriptScriptsRunSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption2)
    ], ScriptScriptsRunSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption3)
    ], ScriptScriptsRunSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption4)
    ], ScriptScriptsRunSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption5)
    ], ScriptScriptsRunSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption6)
    ], ScriptScriptsRunSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption7)
    ], ScriptScriptsRunSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption8)
    ], ScriptScriptsRunSecurity.prototype, "option8", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption9)
    ], ScriptScriptsRunSecurity.prototype, "option9", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption10)
    ], ScriptScriptsRunSecurity.prototype, "option10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption11)
    ], ScriptScriptsRunSecurity.prototype, "option11", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptScriptsRunSecurityOption12)
    ], ScriptScriptsRunSecurity.prototype, "option12", void 0);
    return ScriptScriptsRunSecurity;
}(SpeakeasyBase));
export { ScriptScriptsRunSecurity };
var ScriptScriptsRunRequest = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunRequest, _super);
    function ScriptScriptsRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptScriptsRunPathParams)
    ], ScriptScriptsRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptScriptsRunQueryParams)
    ], ScriptScriptsRunRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExecutionRequest)
    ], ScriptScriptsRunRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptScriptsRunSecurity)
    ], ScriptScriptsRunRequest.prototype, "security", void 0);
    return ScriptScriptsRunRequest;
}(SpeakeasyBase));
export { ScriptScriptsRunRequest };
var ScriptScriptsRunResponse = /** @class */ (function (_super) {
    __extends(ScriptScriptsRunResponse, _super);
    function ScriptScriptsRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScriptScriptsRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ScriptScriptsRunResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScriptScriptsRunResponse.prototype, "statusCode", void 0);
    return ScriptScriptsRunResponse;
}(SpeakeasyBase));
export { ScriptScriptsRunResponse };
