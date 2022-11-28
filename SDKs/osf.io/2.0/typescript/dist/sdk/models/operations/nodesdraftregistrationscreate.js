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
var NodesDraftRegistrationsCreatePathParams = /** @class */ (function (_super) {
    __extends(NodesDraftRegistrationsCreatePathParams, _super);
    function NodesDraftRegistrationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", String)
    ], NodesDraftRegistrationsCreatePathParams.prototype, "nodeId", void 0);
    return NodesDraftRegistrationsCreatePathParams;
}(SpeakeasyBase));
export { NodesDraftRegistrationsCreatePathParams };
// NodesDraftRegistrationsCreateDraftRegistrationAttributesInput
/**
 * The properties of the draft registration entity.
**/
var NodesDraftRegistrationsCreateDraftRegistrationAttributesInput = /** @class */ (function (_super) {
    __extends(NodesDraftRegistrationsCreateDraftRegistrationAttributesInput, _super);
    function NodesDraftRegistrationsCreateDraftRegistrationAttributesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registration_metadata" }),
        __metadata("design:type", String)
    ], NodesDraftRegistrationsCreateDraftRegistrationAttributesInput.prototype, "registrationMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registration_supplement" }),
        __metadata("design:type", String)
    ], NodesDraftRegistrationsCreateDraftRegistrationAttributesInput.prototype, "registrationSupplement", void 0);
    return NodesDraftRegistrationsCreateDraftRegistrationAttributesInput;
}(SpeakeasyBase));
export { NodesDraftRegistrationsCreateDraftRegistrationAttributesInput };
var NodesDraftRegistrationsCreateDraftRegistrationInput = /** @class */ (function (_super) {
    __extends(NodesDraftRegistrationsCreateDraftRegistrationInput, _super);
    function NodesDraftRegistrationsCreateDraftRegistrationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", NodesDraftRegistrationsCreateDraftRegistrationAttributesInput)
    ], NodesDraftRegistrationsCreateDraftRegistrationInput.prototype, "attributes", void 0);
    return NodesDraftRegistrationsCreateDraftRegistrationInput;
}(SpeakeasyBase));
export { NodesDraftRegistrationsCreateDraftRegistrationInput };
var NodesDraftRegistrationsCreateRequest = /** @class */ (function (_super) {
    __extends(NodesDraftRegistrationsCreateRequest, _super);
    function NodesDraftRegistrationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NodesDraftRegistrationsCreatePathParams)
    ], NodesDraftRegistrationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NodesDraftRegistrationsCreateDraftRegistrationInput)
    ], NodesDraftRegistrationsCreateRequest.prototype, "request", void 0);
    return NodesDraftRegistrationsCreateRequest;
}(SpeakeasyBase));
export { NodesDraftRegistrationsCreateRequest };
var NodesDraftRegistrationsCreateResponse = /** @class */ (function (_super) {
    __extends(NodesDraftRegistrationsCreateResponse, _super);
    function NodesDraftRegistrationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NodesDraftRegistrationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NodesDraftRegistrationsCreateResponse.prototype, "statusCode", void 0);
    return NodesDraftRegistrationsCreateResponse;
}(SpeakeasyBase));
export { NodesDraftRegistrationsCreateResponse };
