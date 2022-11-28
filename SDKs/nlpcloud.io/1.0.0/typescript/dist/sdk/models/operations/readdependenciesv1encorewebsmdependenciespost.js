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
var ReadDependenciesV1EnCoreWebSmDependenciesPostRequest = /** @class */ (function (_super) {
    __extends(ReadDependenciesV1EnCoreWebSmDependenciesPostRequest, _super);
    function ReadDependenciesV1EnCoreWebSmDependenciesPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UserRequestIn)
    ], ReadDependenciesV1EnCoreWebSmDependenciesPostRequest.prototype, "request", void 0);
    return ReadDependenciesV1EnCoreWebSmDependenciesPostRequest;
}(SpeakeasyBase));
export { ReadDependenciesV1EnCoreWebSmDependenciesPostRequest };
var ReadDependenciesV1EnCoreWebSmDependenciesPostResponse = /** @class */ (function (_super) {
    __extends(ReadDependenciesV1EnCoreWebSmDependenciesPostResponse, _super);
    function ReadDependenciesV1EnCoreWebSmDependenciesPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReadDependenciesV1EnCoreWebSmDependenciesPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DependenciesOut)
    ], ReadDependenciesV1EnCoreWebSmDependenciesPostResponse.prototype, "dependenciesOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], ReadDependenciesV1EnCoreWebSmDependenciesPostResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReadDependenciesV1EnCoreWebSmDependenciesPostResponse.prototype, "statusCode", void 0);
    return ReadDependenciesV1EnCoreWebSmDependenciesPostResponse;
}(SpeakeasyBase));
export { ReadDependenciesV1EnCoreWebSmDependenciesPostResponse };
