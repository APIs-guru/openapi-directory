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
export var UnliWithoutApplicationnkApplicationProviderEnum;
(function (UnliWithoutApplicationnkApplicationProviderEnum) {
    UnliWithoutApplicationnkApplicationProviderEnum["Messenger"] = "messenger";
    UnliWithoutApplicationnkApplicationProviderEnum["ViberServiceMsg"] = "viber_service_msg";
    UnliWithoutApplicationnkApplicationProviderEnum["Whatsapp"] = "whatsapp";
})(UnliWithoutApplicationnkApplicationProviderEnum || (UnliWithoutApplicationnkApplicationProviderEnum = {}));
var UnliWithoutApplicationnkApplicationPathParams = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplicationPathParams, _super);
    function UnliWithoutApplicationnkApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application_id" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplicationPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=external_id" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplicationPathParams.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplicationPathParams.prototype, "provider", void 0);
    return UnliWithoutApplicationnkApplicationPathParams;
}(SpeakeasyBase));
export { UnliWithoutApplicationnkApplicationPathParams };
var UnliWithoutApplicationnkApplicationSecurity = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplicationSecurity, _super);
    function UnliWithoutApplicationnkApplicationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], UnliWithoutApplicationnkApplicationSecurity.prototype, "bearerAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], UnliWithoutApplicationnkApplicationSecurity.prototype, "basicAuth", void 0);
    return UnliWithoutApplicationnkApplicationSecurity;
}(SpeakeasyBase));
export { UnliWithoutApplicationnkApplicationSecurity };
var UnliWithoutApplicationnkApplication403ApplicationJson = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplication403ApplicationJson, _super);
    function UnliWithoutApplicationnkApplication403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication403ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication403ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication403ApplicationJson.prototype, "type", void 0);
    return UnliWithoutApplicationnkApplication403ApplicationJson;
}(SpeakeasyBase));
export { UnliWithoutApplicationnkApplication403ApplicationJson };
var UnliWithoutApplicationnkApplication409ApplicationJson = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplication409ApplicationJson, _super);
    function UnliWithoutApplicationnkApplication409ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication409ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication409ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplication409ApplicationJson.prototype, "type", void 0);
    return UnliWithoutApplicationnkApplication409ApplicationJson;
}(SpeakeasyBase));
export { UnliWithoutApplicationnkApplication409ApplicationJson };
var UnliWithoutApplicationnkApplicationRequest = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplicationRequest, _super);
    function UnliWithoutApplicationnkApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnliWithoutApplicationnkApplicationPathParams)
    ], UnliWithoutApplicationnkApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnliWithoutApplicationnkApplicationSecurity)
    ], UnliWithoutApplicationnkApplicationRequest.prototype, "security", void 0);
    return UnliWithoutApplicationnkApplicationRequest;
}(SpeakeasyBase));
export { UnliWithoutApplicationnkApplicationRequest };
var UnliWithoutApplicationnkApplicationResponse = /** @class */ (function (_super) {
    __extends(UnliWithoutApplicationnkApplicationResponse, _super);
    function UnliWithoutApplicationnkApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundredAndOneResponse)
    ], UnliWithoutApplicationnkApplicationResponse.prototype, "fourHundredAndOneResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UnliWithoutApplicationnkApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UnliWithoutApplicationnkApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnliWithoutApplicationnkApplication403ApplicationJson)
    ], UnliWithoutApplicationnkApplicationResponse.prototype, "unliWithoutApplicationnkApplication403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UnliWithoutApplicationnkApplication409ApplicationJson)
    ], UnliWithoutApplicationnkApplicationResponse.prototype, "unliWithoutApplicationnkApplication409ApplicationJsonObject", void 0);
    return UnliWithoutApplicationnkApplicationResponse;
}(SpeakeasyBase));
export { UnliWithoutApplicationnkApplicationResponse };
