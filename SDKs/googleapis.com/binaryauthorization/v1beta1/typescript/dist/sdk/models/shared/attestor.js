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
import { UserOwnedDrydockNoteInput } from "./userowneddrydocknote";
import { UserOwnedDrydockNote } from "./userowneddrydocknote";
// AttestorInput
/**
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
**/
var AttestorInput = /** @class */ (function (_super) {
    __extends(AttestorInput, _super);
    function AttestorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], AttestorInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], AttestorInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AttestorInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userOwnedDrydockNote" }),
        __metadata("design:type", UserOwnedDrydockNoteInput)
    ], AttestorInput.prototype, "userOwnedDrydockNote", void 0);
    return AttestorInput;
}(SpeakeasyBase));
export { AttestorInput };
// Attestor
/**
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
**/
var Attestor = /** @class */ (function (_super) {
    __extends(Attestor, _super);
    function Attestor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Attestor.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Attestor.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Attestor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Attestor.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userOwnedDrydockNote" }),
        __metadata("design:type", UserOwnedDrydockNote)
    ], Attestor.prototype, "userOwnedDrydockNote", void 0);
    return Attestor;
}(SpeakeasyBase));
export { Attestor };
