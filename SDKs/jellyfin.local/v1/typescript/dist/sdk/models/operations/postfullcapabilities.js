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
var PostFullCapabilitiesQueryParams = /** @class */ (function (_super) {
    __extends(PostFullCapabilitiesQueryParams, _super);
    function PostFullCapabilitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], PostFullCapabilitiesQueryParams.prototype, "id", void 0);
    return PostFullCapabilitiesQueryParams;
}(SpeakeasyBase));
export { PostFullCapabilitiesQueryParams };
var PostFullCapabilitiesRequests = /** @class */ (function (_super) {
    __extends(PostFullCapabilitiesRequests, _super);
    function PostFullCapabilitiesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ClientCapabilitiesDto)
    ], PostFullCapabilitiesRequests.prototype, "clientCapabilitiesDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ClientCapabilitiesDto)
    ], PostFullCapabilitiesRequests.prototype, "clientCapabilitiesDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ClientCapabilitiesDto)
    ], PostFullCapabilitiesRequests.prototype, "clientCapabilitiesDto2", void 0);
    return PostFullCapabilitiesRequests;
}(SpeakeasyBase));
export { PostFullCapabilitiesRequests };
var PostFullCapabilitiesSecurity = /** @class */ (function (_super) {
    __extends(PostFullCapabilitiesSecurity, _super);
    function PostFullCapabilitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], PostFullCapabilitiesSecurity.prototype, "customAuthentication", void 0);
    return PostFullCapabilitiesSecurity;
}(SpeakeasyBase));
export { PostFullCapabilitiesSecurity };
var PostFullCapabilitiesRequest = /** @class */ (function (_super) {
    __extends(PostFullCapabilitiesRequest, _super);
    function PostFullCapabilitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFullCapabilitiesQueryParams)
    ], PostFullCapabilitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFullCapabilitiesRequests)
    ], PostFullCapabilitiesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFullCapabilitiesSecurity)
    ], PostFullCapabilitiesRequest.prototype, "security", void 0);
    return PostFullCapabilitiesRequest;
}(SpeakeasyBase));
export { PostFullCapabilitiesRequest };
var PostFullCapabilitiesResponse = /** @class */ (function (_super) {
    __extends(PostFullCapabilitiesResponse, _super);
    function PostFullCapabilitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFullCapabilitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFullCapabilitiesResponse.prototype, "statusCode", void 0);
    return PostFullCapabilitiesResponse;
}(SpeakeasyBase));
export { PostFullCapabilitiesResponse };
