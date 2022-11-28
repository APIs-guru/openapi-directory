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
import { SideInputInfo } from "./sideinputinfo";
import { SeqMapTaskOutputInfo } from "./seqmaptaskoutputinfo";
// SeqMapTask
/**
 * Describes a particular function to invoke.
**/
var SeqMapTask = /** @class */ (function (_super) {
    __extends(SeqMapTask, _super);
    function SeqMapTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputs", elemType: SideInputInfo }),
        __metadata("design:type", Array)
    ], SeqMapTask.prototype, "inputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SeqMapTask.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputInfos", elemType: SeqMapTaskOutputInfo }),
        __metadata("design:type", Array)
    ], SeqMapTask.prototype, "outputInfos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stageName" }),
        __metadata("design:type", String)
    ], SeqMapTask.prototype, "stageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemName" }),
        __metadata("design:type", String)
    ], SeqMapTask.prototype, "systemName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userFn" }),
        __metadata("design:type", Map)
    ], SeqMapTask.prototype, "userFn", void 0);
    return SeqMapTask;
}(SpeakeasyBase));
export { SeqMapTask };
