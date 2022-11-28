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
var AddMediaPathQueryParams = /** @class */ (function (_super) {
    __extends(AddMediaPathQueryParams, _super);
    function AddMediaPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshLibrary" }),
        __metadata("design:type", Boolean)
    ], AddMediaPathQueryParams.prototype, "refreshLibrary", void 0);
    return AddMediaPathQueryParams;
}(SpeakeasyBase));
export { AddMediaPathQueryParams };
var AddMediaPathRequests = /** @class */ (function (_super) {
    __extends(AddMediaPathRequests, _super);
    function AddMediaPathRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.MediaPathDto)
    ], AddMediaPathRequests.prototype, "mediaPathDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MediaPathDto)
    ], AddMediaPathRequests.prototype, "mediaPathDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.MediaPathDto)
    ], AddMediaPathRequests.prototype, "mediaPathDto2", void 0);
    return AddMediaPathRequests;
}(SpeakeasyBase));
export { AddMediaPathRequests };
var AddMediaPathSecurity = /** @class */ (function (_super) {
    __extends(AddMediaPathSecurity, _super);
    function AddMediaPathSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], AddMediaPathSecurity.prototype, "customAuthentication", void 0);
    return AddMediaPathSecurity;
}(SpeakeasyBase));
export { AddMediaPathSecurity };
var AddMediaPathRequest = /** @class */ (function (_super) {
    __extends(AddMediaPathRequest, _super);
    function AddMediaPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddMediaPathQueryParams)
    ], AddMediaPathRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddMediaPathRequests)
    ], AddMediaPathRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddMediaPathSecurity)
    ], AddMediaPathRequest.prototype, "security", void 0);
    return AddMediaPathRequest;
}(SpeakeasyBase));
export { AddMediaPathRequest };
var AddMediaPathResponse = /** @class */ (function (_super) {
    __extends(AddMediaPathResponse, _super);
    function AddMediaPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddMediaPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddMediaPathResponse.prototype, "statusCode", void 0);
    return AddMediaPathResponse;
}(SpeakeasyBase));
export { AddMediaPathResponse };
