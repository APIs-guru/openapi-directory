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
var CreateLongviewClientSecurity = /** @class */ (function (_super) {
    __extends(CreateLongviewClientSecurity, _super);
    function CreateLongviewClientSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateLongviewClientSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateLongviewClientSecurity.prototype, "oauth", void 0);
    return CreateLongviewClientSecurity;
}(SpeakeasyBase));
export { CreateLongviewClientSecurity };
var CreateLongviewClientDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateLongviewClientDefaultApplicationJson, _super);
    function CreateLongviewClientDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateLongviewClientDefaultApplicationJson.prototype, "errors", void 0);
    return CreateLongviewClientDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateLongviewClientDefaultApplicationJson };
var CreateLongviewClientRequest = /** @class */ (function (_super) {
    __extends(CreateLongviewClientRequest, _super);
    function CreateLongviewClientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LongviewClientInput)
    ], CreateLongviewClientRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateLongviewClientSecurity)
    ], CreateLongviewClientRequest.prototype, "security", void 0);
    return CreateLongviewClientRequest;
}(SpeakeasyBase));
export { CreateLongviewClientRequest };
var CreateLongviewClientResponse = /** @class */ (function (_super) {
    __extends(CreateLongviewClientResponse, _super);
    function CreateLongviewClientResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateLongviewClientResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LongviewClient)
    ], CreateLongviewClientResponse.prototype, "longviewClient", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateLongviewClientResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateLongviewClientDefaultApplicationJson)
    ], CreateLongviewClientResponse.prototype, "createLongviewClientDefaultApplicationJsonObject", void 0);
    return CreateLongviewClientResponse;
}(SpeakeasyBase));
export { CreateLongviewClientResponse };
