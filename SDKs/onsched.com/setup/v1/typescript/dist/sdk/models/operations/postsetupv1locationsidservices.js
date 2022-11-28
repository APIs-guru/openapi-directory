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
var PostSetupV1LocationsIdServicesPathParams = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdServicesPathParams, _super);
    function PostSetupV1LocationsIdServicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostSetupV1LocationsIdServicesPathParams.prototype, "id", void 0);
    return PostSetupV1LocationsIdServicesPathParams;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdServicesPathParams };
var PostSetupV1LocationsIdServicesRequests = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdServicesRequests, _super);
    function PostSetupV1LocationsIdServicesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", Array)
    ], PostSetupV1LocationsIdServicesRequests.prototype, "strings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Array)
    ], PostSetupV1LocationsIdServicesRequests.prototype, "strings1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", Array)
    ], PostSetupV1LocationsIdServicesRequests.prototype, "strings2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Array)
    ], PostSetupV1LocationsIdServicesRequests.prototype, "strings3", void 0);
    return PostSetupV1LocationsIdServicesRequests;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdServicesRequests };
var PostSetupV1LocationsIdServicesRequest = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdServicesRequest, _super);
    function PostSetupV1LocationsIdServicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1LocationsIdServicesPathParams)
    ], PostSetupV1LocationsIdServicesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1LocationsIdServicesRequests)
    ], PostSetupV1LocationsIdServicesRequest.prototype, "request", void 0);
    return PostSetupV1LocationsIdServicesRequest;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdServicesRequest };
var PostSetupV1LocationsIdServicesResponse = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdServicesResponse, _super);
    function PostSetupV1LocationsIdServicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetupV1LocationsIdServicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LocationViewModel)
    ], PostSetupV1LocationsIdServicesResponse.prototype, "locationViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetupV1LocationsIdServicesResponse.prototype, "statusCode", void 0);
    return PostSetupV1LocationsIdServicesResponse;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdServicesResponse };
