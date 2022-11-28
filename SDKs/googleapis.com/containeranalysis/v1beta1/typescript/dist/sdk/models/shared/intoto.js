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
import { ArtifactRule } from "./artifactrule";
import { SigningKey } from "./signingkey";
// InToto
/**
 * This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note.
**/
var InToto = /** @class */ (function (_super) {
    __extends(InToto, _super);
    function InToto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedCommand" }),
        __metadata("design:type", Array)
    ], InToto.prototype, "expectedCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedMaterials", elemType: ArtifactRule }),
        __metadata("design:type", Array)
    ], InToto.prototype, "expectedMaterials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedProducts", elemType: ArtifactRule }),
        __metadata("design:type", Array)
    ], InToto.prototype, "expectedProducts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signingKeys", elemType: SigningKey }),
        __metadata("design:type", Array)
    ], InToto.prototype, "signingKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stepName" }),
        __metadata("design:type", String)
    ], InToto.prototype, "stepName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=threshold" }),
        __metadata("design:type", String)
    ], InToto.prototype, "threshold", void 0);
    return InToto;
}(SpeakeasyBase));
export { InToto };
