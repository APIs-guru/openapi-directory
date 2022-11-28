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
var RemoveFromCollectionPathParams = /** @class */ (function (_super) {
    __extends(RemoveFromCollectionPathParams, _super);
    function RemoveFromCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" }),
        __metadata("design:type", String)
    ], RemoveFromCollectionPathParams.prototype, "collectionId", void 0);
    return RemoveFromCollectionPathParams;
}(SpeakeasyBase));
export { RemoveFromCollectionPathParams };
var RemoveFromCollectionQueryParams = /** @class */ (function (_super) {
    __extends(RemoveFromCollectionQueryParams, _super);
    function RemoveFromCollectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], RemoveFromCollectionQueryParams.prototype, "ids", void 0);
    return RemoveFromCollectionQueryParams;
}(SpeakeasyBase));
export { RemoveFromCollectionQueryParams };
var RemoveFromCollectionSecurity = /** @class */ (function (_super) {
    __extends(RemoveFromCollectionSecurity, _super);
    function RemoveFromCollectionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], RemoveFromCollectionSecurity.prototype, "customAuthentication", void 0);
    return RemoveFromCollectionSecurity;
}(SpeakeasyBase));
export { RemoveFromCollectionSecurity };
var RemoveFromCollectionRequest = /** @class */ (function (_super) {
    __extends(RemoveFromCollectionRequest, _super);
    function RemoveFromCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFromCollectionPathParams)
    ], RemoveFromCollectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFromCollectionQueryParams)
    ], RemoveFromCollectionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveFromCollectionSecurity)
    ], RemoveFromCollectionRequest.prototype, "security", void 0);
    return RemoveFromCollectionRequest;
}(SpeakeasyBase));
export { RemoveFromCollectionRequest };
var RemoveFromCollectionResponse = /** @class */ (function (_super) {
    __extends(RemoveFromCollectionResponse, _super);
    function RemoveFromCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveFromCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveFromCollectionResponse.prototype, "statusCode", void 0);
    return RemoveFromCollectionResponse;
}(SpeakeasyBase));
export { RemoveFromCollectionResponse };
