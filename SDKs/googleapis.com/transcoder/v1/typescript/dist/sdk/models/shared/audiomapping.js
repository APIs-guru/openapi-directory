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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// AudioMapping
/**
 * The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
**/
var AudioMapping = /** @class */ (function (_super) {
    __extends(AudioMapping, _super);
    function AudioMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=atomKey" }),
        __metadata("design:type", String)
    ], AudioMapping.prototype, "atomKey", void 0);
    __decorate([
        Metadata({ data: "json, name=gainDb" }),
        __metadata("design:type", Number)
    ], AudioMapping.prototype, "gainDb", void 0);
    __decorate([
        Metadata({ data: "json, name=inputChannel" }),
        __metadata("design:type", Number)
    ], AudioMapping.prototype, "inputChannel", void 0);
    __decorate([
        Metadata({ data: "json, name=inputKey" }),
        __metadata("design:type", String)
    ], AudioMapping.prototype, "inputKey", void 0);
    __decorate([
        Metadata({ data: "json, name=inputTrack" }),
        __metadata("design:type", Number)
    ], AudioMapping.prototype, "inputTrack", void 0);
    __decorate([
        Metadata({ data: "json, name=outputChannel" }),
        __metadata("design:type", Number)
    ], AudioMapping.prototype, "outputChannel", void 0);
    return AudioMapping;
}(SpeakeasyBase));
export { AudioMapping };
