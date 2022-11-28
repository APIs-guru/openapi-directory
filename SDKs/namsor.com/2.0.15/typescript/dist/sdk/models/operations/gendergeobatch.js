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
var GenderGeoBatchSecurity = /** @class */ (function (_super) {
    __extends(GenderGeoBatchSecurity, _super);
    function GenderGeoBatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GenderGeoBatchSecurity.prototype, "apiKey", void 0);
    return GenderGeoBatchSecurity;
}(SpeakeasyBase));
export { GenderGeoBatchSecurity };
var GenderGeoBatchRequest = /** @class */ (function (_super) {
    __extends(GenderGeoBatchRequest, _super);
    function GenderGeoBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchFirstLastNameGeoIn)
    ], GenderGeoBatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenderGeoBatchSecurity)
    ], GenderGeoBatchRequest.prototype, "security", void 0);
    return GenderGeoBatchRequest;
}(SpeakeasyBase));
export { GenderGeoBatchRequest };
var GenderGeoBatchResponse = /** @class */ (function (_super) {
    __extends(GenderGeoBatchResponse, _super);
    function GenderGeoBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchFirstLastNameGenderedOut)
    ], GenderGeoBatchResponse.prototype, "batchFirstLastNameGenderedOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenderGeoBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenderGeoBatchResponse.prototype, "statusCode", void 0);
    return GenderGeoBatchResponse;
}(SpeakeasyBase));
export { GenderGeoBatchResponse };
