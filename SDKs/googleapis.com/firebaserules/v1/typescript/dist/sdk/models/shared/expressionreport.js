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
import { SourcePosition } from "./sourceposition";
import { ValueCount } from "./valuecount";
// ExpressionReport
/**
 * Describes where in a file an expression is found and what it was evaluated to over the course of its use.
**/
var ExpressionReport = /** @class */ (function (_super) {
    __extends(ExpressionReport, _super);
    function ExpressionReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=children", elemType: ExpressionReport }),
        __metadata("design:type", Array)
    ], ExpressionReport.prototype, "children", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourcePosition" }),
        __metadata("design:type", SourcePosition)
    ], ExpressionReport.prototype, "sourcePosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values", elemType: ValueCount }),
        __metadata("design:type", Array)
    ], ExpressionReport.prototype, "values", void 0);
    return ExpressionReport;
}(SpeakeasyBase));
export { ExpressionReport };
