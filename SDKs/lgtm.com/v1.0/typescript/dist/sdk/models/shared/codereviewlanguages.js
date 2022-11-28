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
import { CodereviewAlerts } from "./codereviewalerts";
export var CodereviewLanguagesStatusEnum;
(function (CodereviewLanguagesStatusEnum) {
    CodereviewLanguagesStatusEnum["Pending"] = "pending";
    CodereviewLanguagesStatusEnum["Failure"] = "failure";
    CodereviewLanguagesStatusEnum["Success"] = "success";
})(CodereviewLanguagesStatusEnum || (CodereviewLanguagesStatusEnum = {}));
var CodereviewLanguages = /** @class */ (function (_super) {
    __extends(CodereviewLanguages, _super);
    function CodereviewLanguages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alerts", elemType: CodereviewAlerts }),
        __metadata("design:type", Array)
    ], CodereviewLanguages.prototype, "alerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixed" }),
        __metadata("design:type", Number)
    ], CodereviewLanguages.prototype, "fixed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], CodereviewLanguages.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new" }),
        __metadata("design:type", Number)
    ], CodereviewLanguages.prototype, "new", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CodereviewLanguages.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status-message" }),
        __metadata("design:type", String)
    ], CodereviewLanguages.prototype, "statusMessage", void 0);
    return CodereviewLanguages;
}(SpeakeasyBase));
export { CodereviewLanguages };
