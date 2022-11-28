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
import { Container } from "./container";
import { LocalObjectReference } from "./localobjectreference";
import { Volume } from "./volume";
// RevisionSpec
/**
 * RevisionSpec holds the desired state of the Revision (from the client).
**/
var RevisionSpec = /** @class */ (function (_super) {
    __extends(RevisionSpec, _super);
    function RevisionSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerConcurrency" }),
        __metadata("design:type", Number)
    ], RevisionSpec.prototype, "containerConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containers", elemType: Container }),
        __metadata("design:type", Array)
    ], RevisionSpec.prototype, "containers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableServiceLinks" }),
        __metadata("design:type", Boolean)
    ], RevisionSpec.prototype, "enableServiceLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imagePullSecrets", elemType: LocalObjectReference }),
        __metadata("design:type", Array)
    ], RevisionSpec.prototype, "imagePullSecrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountName" }),
        __metadata("design:type", String)
    ], RevisionSpec.prototype, "serviceAccountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutSeconds" }),
        __metadata("design:type", Number)
    ], RevisionSpec.prototype, "timeoutSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume }),
        __metadata("design:type", Array)
    ], RevisionSpec.prototype, "volumes", void 0);
    return RevisionSpec;
}(SpeakeasyBase));
export { RevisionSpec };
