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
var CancelAccountSecurity = /** @class */ (function (_super) {
    __extends(CancelAccountSecurity, _super);
    function CancelAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CancelAccountSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CancelAccountSecurity.prototype, "oauth", void 0);
    return CancelAccountSecurity;
}(SpeakeasyBase));
export { CancelAccountSecurity };
var CancelAccount200ApplicationJson = /** @class */ (function (_super) {
    __extends(CancelAccount200ApplicationJson, _super);
    function CancelAccount200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=survey_link" }),
        __metadata("design:type", String)
    ], CancelAccount200ApplicationJson.prototype, "surveyLink", void 0);
    return CancelAccount200ApplicationJson;
}(SpeakeasyBase));
export { CancelAccount200ApplicationJson };
var CancelAccount409ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(CancelAccount409ApplicationJsonErrors, _super);
    function CancelAccount409ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], CancelAccount409ApplicationJsonErrors.prototype, "reason", void 0);
    return CancelAccount409ApplicationJsonErrors;
}(SpeakeasyBase));
export { CancelAccount409ApplicationJsonErrors };
var CancelAccount409ApplicationJson = /** @class */ (function (_super) {
    __extends(CancelAccount409ApplicationJson, _super);
    function CancelAccount409ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: CancelAccount409ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], CancelAccount409ApplicationJson.prototype, "errors", void 0);
    return CancelAccount409ApplicationJson;
}(SpeakeasyBase));
export { CancelAccount409ApplicationJson };
var CancelAccountDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CancelAccountDefaultApplicationJson, _super);
    function CancelAccountDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CancelAccountDefaultApplicationJson.prototype, "errors", void 0);
    return CancelAccountDefaultApplicationJson;
}(SpeakeasyBase));
export { CancelAccountDefaultApplicationJson };
var CancelAccountRequest = /** @class */ (function (_super) {
    __extends(CancelAccountRequest, _super);
    function CancelAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], CancelAccountRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelAccountSecurity)
    ], CancelAccountRequest.prototype, "security", void 0);
    return CancelAccountRequest;
}(SpeakeasyBase));
export { CancelAccountRequest };
var CancelAccountResponse = /** @class */ (function (_super) {
    __extends(CancelAccountResponse, _super);
    function CancelAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CancelAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CancelAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelAccount200ApplicationJson)
    ], CancelAccountResponse.prototype, "cancelAccount200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelAccount409ApplicationJson)
    ], CancelAccountResponse.prototype, "cancelAccount409ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelAccountDefaultApplicationJson)
    ], CancelAccountResponse.prototype, "cancelAccountDefaultApplicationJsonObject", void 0);
    return CancelAccountResponse;
}(SpeakeasyBase));
export { CancelAccountResponse };
