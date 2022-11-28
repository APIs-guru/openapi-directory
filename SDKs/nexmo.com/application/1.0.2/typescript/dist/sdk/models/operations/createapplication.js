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
export var CreateApplicationRequestBodyTypeEnum;
(function (CreateApplicationRequestBodyTypeEnum) {
    CreateApplicationRequestBodyTypeEnum["Voice"] = "voice";
    CreateApplicationRequestBodyTypeEnum["Messages"] = "messages";
})(CreateApplicationRequestBodyTypeEnum || (CreateApplicationRequestBodyTypeEnum = {}));
var CreateApplicationRequestBody = /** @class */ (function (_super) {
    __extends(CreateApplicationRequestBody, _super);
    function CreateApplicationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer_method" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "answerMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer_url" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "answerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_key" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_secret" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "apiSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_method" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "eventMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_url" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "eventUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_method" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "inboundMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_url" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "inboundUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_method" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "statusMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_url" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "statusUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateApplicationRequestBody.prototype, "type", void 0);
    return CreateApplicationRequestBody;
}(SpeakeasyBase));
export { CreateApplicationRequestBody };
var CreateApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateApplicationRequest, _super);
    function CreateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateApplicationRequestBody)
    ], CreateApplicationRequest.prototype, "request", void 0);
    return CreateApplicationRequest;
}(SpeakeasyBase));
export { CreateApplicationRequest };
var CreateApplicationResponse = /** @class */ (function (_super) {
    __extends(CreateApplicationResponse, _super);
    function CreateApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApplicationCreated)
    ], CreateApplicationResponse.prototype, "applicationCreated", void 0);
    return CreateApplicationResponse;
}(SpeakeasyBase));
export { CreateApplicationResponse };
