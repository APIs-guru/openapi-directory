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
var CreateTagRequestBody = /** @class */ (function (_super) {
    __extends(CreateTagRequestBody, _super);
    function CreateTagRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domains" }),
        __metadata("design:type", Array)
    ], CreateTagRequestBody.prototype, "domains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CreateTagRequestBody.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linodes" }),
        __metadata("design:type", Array)
    ], CreateTagRequestBody.prototype, "linodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodebalancers" }),
        __metadata("design:type", Array)
    ], CreateTagRequestBody.prototype, "nodebalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes" }),
        __metadata("design:type", Array)
    ], CreateTagRequestBody.prototype, "volumes", void 0);
    return CreateTagRequestBody;
}(SpeakeasyBase));
export { CreateTagRequestBody };
var CreateTagSecurity = /** @class */ (function (_super) {
    __extends(CreateTagSecurity, _super);
    function CreateTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateTagSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateTagSecurity.prototype, "oauth", void 0);
    return CreateTagSecurity;
}(SpeakeasyBase));
export { CreateTagSecurity };
var CreateTagDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTagDefaultApplicationJson, _super);
    function CreateTagDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateTagDefaultApplicationJson.prototype, "errors", void 0);
    return CreateTagDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateTagDefaultApplicationJson };
var CreateTagRequest = /** @class */ (function (_super) {
    __extends(CreateTagRequest, _super);
    function CreateTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateTagRequestBody)
    ], CreateTagRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTagSecurity)
    ], CreateTagRequest.prototype, "security", void 0);
    return CreateTagRequest;
}(SpeakeasyBase));
export { CreateTagRequest };
var CreateTagResponse = /** @class */ (function (_super) {
    __extends(CreateTagResponse, _super);
    function CreateTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tag)
    ], CreateTagResponse.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTagDefaultApplicationJson)
    ], CreateTagResponse.prototype, "createTagDefaultApplicationJsonObject", void 0);
    return CreateTagResponse;
}(SpeakeasyBase));
export { CreateTagResponse };
