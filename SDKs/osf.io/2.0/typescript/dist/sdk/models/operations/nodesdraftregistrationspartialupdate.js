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
var NodesDraftRegistrationsPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(NodesDraftRegistrationsPartialUpdatePathParams, _super);
    function NodesDraftRegistrationsPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=draft_id" }),
        __metadata("design:type", String)
    ], NodesDraftRegistrationsPartialUpdatePathParams.prototype, "draftId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" }),
        __metadata("design:type", String)
    ], NodesDraftRegistrationsPartialUpdatePathParams.prototype, "nodeId", void 0);
    return NodesDraftRegistrationsPartialUpdatePathParams;
}(SpeakeasyBase));
export { NodesDraftRegistrationsPartialUpdatePathParams };
// NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput
/**
 * The properties of the draft registration entity.
**/
var NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput = /** @class */ (function (_super) {
    __extends(NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput, _super);
    function NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registration_metadata" }),
        __metadata("design:type", String)
    ], NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput.prototype, "registrationMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registration_supplement" }),
        __metadata("design:type", String)
    ], NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput.prototype, "registrationSupplement", void 0);
    return NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput;
}(SpeakeasyBase));
export { NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput };
var NodesDraftRegistrationsPartialUpdateDraftRegistrationInput = /** @class */ (function (_super) {
    __extends(NodesDraftRegistrationsPartialUpdateDraftRegistrationInput, _super);
    function NodesDraftRegistrationsPartialUpdateDraftRegistrationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput)
    ], NodesDraftRegistrationsPartialUpdateDraftRegistrationInput.prototype, "attributes", void 0);
    return NodesDraftRegistrationsPartialUpdateDraftRegistrationInput;
}(SpeakeasyBase));
export { NodesDraftRegistrationsPartialUpdateDraftRegistrationInput };
var NodesDraftRegistrationsPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(NodesDraftRegistrationsPartialUpdateRequest, _super);
    function NodesDraftRegistrationsPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NodesDraftRegistrationsPartialUpdatePathParams)
    ], NodesDraftRegistrationsPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", NodesDraftRegistrationsPartialUpdateDraftRegistrationInput)
    ], NodesDraftRegistrationsPartialUpdateRequest.prototype, "request", void 0);
    return NodesDraftRegistrationsPartialUpdateRequest;
}(SpeakeasyBase));
export { NodesDraftRegistrationsPartialUpdateRequest };
var NodesDraftRegistrationsPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(NodesDraftRegistrationsPartialUpdateResponse, _super);
    function NodesDraftRegistrationsPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NodesDraftRegistrationsPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NodesDraftRegistrationsPartialUpdateResponse.prototype, "statusCode", void 0);
    return NodesDraftRegistrationsPartialUpdateResponse;
}(SpeakeasyBase));
export { NodesDraftRegistrationsPartialUpdateResponse };
