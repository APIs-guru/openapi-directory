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
export var FirstLastNameGenderedOutLikelyGenderEnum;
(function (FirstLastNameGenderedOutLikelyGenderEnum) {
    FirstLastNameGenderedOutLikelyGenderEnum["Male"] = "male";
    FirstLastNameGenderedOutLikelyGenderEnum["Female"] = "female";
    FirstLastNameGenderedOutLikelyGenderEnum["Unknown"] = "unknown";
})(FirstLastNameGenderedOutLikelyGenderEnum || (FirstLastNameGenderedOutLikelyGenderEnum = {}));
// FirstLastNameGenderedOut
/**
 * Represents the output of inferring the LIKELY gender from a personal name.
**/
var FirstLastNameGenderedOut = /** @class */ (function (_super) {
    __extends(FirstLastNameGenderedOut, _super);
    function FirstLastNameGenderedOut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], FirstLastNameGenderedOut.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genderScale" }),
        __metadata("design:type", Number)
    ], FirstLastNameGenderedOut.prototype, "genderScale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FirstLastNameGenderedOut.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], FirstLastNameGenderedOut.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likelyGender" }),
        __metadata("design:type", String)
    ], FirstLastNameGenderedOut.prototype, "likelyGender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=probabilityCalibrated" }),
        __metadata("design:type", Number)
    ], FirstLastNameGenderedOut.prototype, "probabilityCalibrated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], FirstLastNameGenderedOut.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=script" }),
        __metadata("design:type", String)
    ], FirstLastNameGenderedOut.prototype, "script", void 0);
    return FirstLastNameGenderedOut;
}(SpeakeasyBase));
export { FirstLastNameGenderedOut };
