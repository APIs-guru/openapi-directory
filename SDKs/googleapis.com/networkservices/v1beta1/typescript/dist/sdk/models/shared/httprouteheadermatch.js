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
import { HttpRouteHeaderMatchIntegerRange } from "./httprouteheadermatchintegerrange";
// HttpRouteHeaderMatch
/**
 * Specifies how to select a route rule based on HTTP request headers.
**/
var HttpRouteHeaderMatch = /** @class */ (function (_super) {
    __extends(HttpRouteHeaderMatch, _super);
    function HttpRouteHeaderMatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exactMatch" }),
        __metadata("design:type", String)
    ], HttpRouteHeaderMatch.prototype, "exactMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header" }),
        __metadata("design:type", String)
    ], HttpRouteHeaderMatch.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invertMatch" }),
        __metadata("design:type", Boolean)
    ], HttpRouteHeaderMatch.prototype, "invertMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefixMatch" }),
        __metadata("design:type", String)
    ], HttpRouteHeaderMatch.prototype, "prefixMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=presentMatch" }),
        __metadata("design:type", Boolean)
    ], HttpRouteHeaderMatch.prototype, "presentMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rangeMatch" }),
        __metadata("design:type", HttpRouteHeaderMatchIntegerRange)
    ], HttpRouteHeaderMatch.prototype, "rangeMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regexMatch" }),
        __metadata("design:type", String)
    ], HttpRouteHeaderMatch.prototype, "regexMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffixMatch" }),
        __metadata("design:type", String)
    ], HttpRouteHeaderMatch.prototype, "suffixMatch", void 0);
    return HttpRouteHeaderMatch;
}(SpeakeasyBase));
export { HttpRouteHeaderMatch };
