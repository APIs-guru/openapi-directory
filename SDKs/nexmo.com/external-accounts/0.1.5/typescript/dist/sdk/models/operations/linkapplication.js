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
export var LinkApplicationProviderEnum;
(function (LinkApplicationProviderEnum) {
    LinkApplicationProviderEnum["Messenger"] = "messenger";
    LinkApplicationProviderEnum["ViberServiceMsg"] = "viber_service_msg";
    LinkApplicationProviderEnum["Whatsapp"] = "whatsapp";
})(LinkApplicationProviderEnum || (LinkApplicationProviderEnum = {}));
var LinkApplicationPathParams = /** @class */ (function (_super) {
    __extends(LinkApplicationPathParams, _super);
    function LinkApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_id" }),
        __metadata("design:type", String)
    ], LinkApplicationPathParams.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" }),
        __metadata("design:type", String)
    ], LinkApplicationPathParams.prototype, "provider", void 0);
    return LinkApplicationPathParams;
}(SpeakeasyBase));
export { LinkApplicationPathParams };
var LinkApplicationRequestBody = /** @class */ (function (_super) {
    __extends(LinkApplicationRequestBody, _super);
    function LinkApplicationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application" }),
        __metadata("design:type", String)
    ], LinkApplicationRequestBody.prototype, "application", void 0);
    return LinkApplicationRequestBody;
}(SpeakeasyBase));
export { LinkApplicationRequestBody };
var LinkApplicationSecurity = /** @class */ (function (_super) {
    __extends(LinkApplicationSecurity, _super);
    function LinkApplicationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], LinkApplicationSecurity.prototype, "bearerAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], LinkApplicationSecurity.prototype, "basicAuth", void 0);
    return LinkApplicationSecurity;
}(SpeakeasyBase));
export { LinkApplicationSecurity };
var LinkApplication403ApplicationJson = /** @class */ (function (_super) {
    __extends(LinkApplication403ApplicationJson, _super);
    function LinkApplication403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], LinkApplication403ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], LinkApplication403ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LinkApplication403ApplicationJson.prototype, "type", void 0);
    return LinkApplication403ApplicationJson;
}(SpeakeasyBase));
export { LinkApplication403ApplicationJson };
var LinkApplication409ApplicationJson = /** @class */ (function (_super) {
    __extends(LinkApplication409ApplicationJson, _super);
    function LinkApplication409ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], LinkApplication409ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], LinkApplication409ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LinkApplication409ApplicationJson.prototype, "type", void 0);
    return LinkApplication409ApplicationJson;
}(SpeakeasyBase));
export { LinkApplication409ApplicationJson };
var LinkApplicationRequest = /** @class */ (function (_super) {
    __extends(LinkApplicationRequest, _super);
    function LinkApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LinkApplicationPathParams)
    ], LinkApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LinkApplicationRequestBody)
    ], LinkApplicationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LinkApplicationSecurity)
    ], LinkApplicationRequest.prototype, "security", void 0);
    return LinkApplicationRequest;
}(SpeakeasyBase));
export { LinkApplicationRequest };
var LinkApplicationResponse = /** @class */ (function (_super) {
    __extends(LinkApplicationResponse, _super);
    function LinkApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundredAndOneResponse)
    ], LinkApplicationResponse.prototype, "fourHundredAndOneResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountResponse)
    ], LinkApplicationResponse.prototype, "accountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LinkApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LinkApplication403ApplicationJson)
    ], LinkApplicationResponse.prototype, "linkApplication403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LinkApplication409ApplicationJson)
    ], LinkApplicationResponse.prototype, "linkApplication409ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LinkApplicationResponse.prototype, "statusCode", void 0);
    return LinkApplicationResponse;
}(SpeakeasyBase));
export { LinkApplicationResponse };
