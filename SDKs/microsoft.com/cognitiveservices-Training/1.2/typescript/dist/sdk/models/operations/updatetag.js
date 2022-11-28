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
var UpdateTagPathParams = /** @class */ (function (_super) {
    __extends(UpdateTagPathParams, _super);
    function UpdateTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], UpdateTagPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", String)
    ], UpdateTagPathParams.prototype, "tagId", void 0);
    return UpdateTagPathParams;
}(SpeakeasyBase));
export { UpdateTagPathParams };
var UpdateTagHeaders = /** @class */ (function (_super) {
    __extends(UpdateTagHeaders, _super);
    function UpdateTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], UpdateTagHeaders.prototype, "trainingKey", void 0);
    return UpdateTagHeaders;
}(SpeakeasyBase));
export { UpdateTagHeaders };
var UpdateTagRequestsInput = /** @class */ (function (_super) {
    __extends(UpdateTagRequestsInput, _super);
    function UpdateTagRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateTagRequestsInput.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TagInput)
    ], UpdateTagRequestsInput.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.TagInput)
    ], UpdateTagRequestsInput.prototype, "tag1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.TagInput)
    ], UpdateTagRequestsInput.prototype, "tag2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], UpdateTagRequestsInput.prototype, "textXml", void 0);
    return UpdateTagRequestsInput;
}(SpeakeasyBase));
export { UpdateTagRequestsInput };
var UpdateTagRequest = /** @class */ (function (_super) {
    __extends(UpdateTagRequest, _super);
    function UpdateTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTagPathParams)
    ], UpdateTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTagHeaders)
    ], UpdateTagRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTagRequestsInput)
    ], UpdateTagRequest.prototype, "request", void 0);
    return UpdateTagRequest;
}(SpeakeasyBase));
export { UpdateTagRequest };
var UpdateTagResponse = /** @class */ (function (_super) {
    __extends(UpdateTagResponse, _super);
    function UpdateTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UpdateTagResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tag)
    ], UpdateTagResponse.prototype, "tag", void 0);
    return UpdateTagResponse;
}(SpeakeasyBase));
export { UpdateTagResponse };
