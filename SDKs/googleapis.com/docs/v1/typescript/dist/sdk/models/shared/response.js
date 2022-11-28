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
import { CreateFooterResponse } from "./createfooterresponse";
import { CreateFootnoteResponse } from "./createfootnoteresponse";
import { CreateHeaderResponse } from "./createheaderresponse";
import { CreateNamedRangeResponse } from "./createnamedrangeresponse";
import { InsertInlineImageResponse } from "./insertinlineimageresponse";
import { InsertInlineSheetsChartResponse } from "./insertinlinesheetschartresponse";
import { ReplaceAllTextResponse } from "./replacealltextresponse";
// Response
/**
 * A single response from an update.
**/
var Response = /** @class */ (function (_super) {
    __extends(Response, _super);
    function Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createFooter" }),
        __metadata("design:type", CreateFooterResponse)
    ], Response.prototype, "createFooter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createFootnote" }),
        __metadata("design:type", CreateFootnoteResponse)
    ], Response.prototype, "createFootnote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createHeader" }),
        __metadata("design:type", CreateHeaderResponse)
    ], Response.prototype, "createHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createNamedRange" }),
        __metadata("design:type", CreateNamedRangeResponse)
    ], Response.prototype, "createNamedRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertInlineImage" }),
        __metadata("design:type", InsertInlineImageResponse)
    ], Response.prototype, "insertInlineImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertInlineSheetsChart" }),
        __metadata("design:type", InsertInlineSheetsChartResponse)
    ], Response.prototype, "insertInlineSheetsChart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceAllText" }),
        __metadata("design:type", ReplaceAllTextResponse)
    ], Response.prototype, "replaceAllText", void 0);
    return Response;
}(SpeakeasyBase));
export { Response };
