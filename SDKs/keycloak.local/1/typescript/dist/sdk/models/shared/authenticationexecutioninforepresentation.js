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
var AuthenticationExecutionInfoRepresentation = /** @class */ (function (_super) {
    __extends(AuthenticationExecutionInfoRepresentation, _super);
    function AuthenticationExecutionInfoRepresentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], AuthenticationExecutionInfoRepresentation.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticationConfig" }),
        __metadata("design:type", String)
    ], AuthenticationExecutionInfoRepresentation.prototype, "authenticationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticationFlow" }),
        __metadata("design:type", Boolean)
    ], AuthenticationExecutionInfoRepresentation.prototype, "authenticationFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configurable" }),
        __metadata("design:type", Boolean)
    ], AuthenticationExecutionInfoRepresentation.prototype, "configurable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AuthenticationExecutionInfoRepresentation.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowId" }),
        __metadata("design:type", String)
    ], AuthenticationExecutionInfoRepresentation.prototype, "flowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AuthenticationExecutionInfoRepresentation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], AuthenticationExecutionInfoRepresentation.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=level" }),
        __metadata("design:type", Number)
    ], AuthenticationExecutionInfoRepresentation.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerId" }),
        __metadata("design:type", String)
    ], AuthenticationExecutionInfoRepresentation.prototype, "providerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requirement" }),
        __metadata("design:type", String)
    ], AuthenticationExecutionInfoRepresentation.prototype, "requirement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requirementChoices" }),
        __metadata("design:type", Array)
    ], AuthenticationExecutionInfoRepresentation.prototype, "requirementChoices", void 0);
    return AuthenticationExecutionInfoRepresentation;
}(SpeakeasyBase));
export { AuthenticationExecutionInfoRepresentation };
