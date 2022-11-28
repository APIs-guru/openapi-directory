import { SpeakeasyBase } from "../../../internal/utils";
import { ColorStop } from "./colorstop";
export declare enum RecolorNameEnum {
    None = "NONE",
    Light1 = "LIGHT1",
    Light2 = "LIGHT2",
    Light3 = "LIGHT3",
    Light4 = "LIGHT4",
    Light5 = "LIGHT5",
    Light6 = "LIGHT6",
    Light7 = "LIGHT7",
    Light8 = "LIGHT8",
    Light9 = "LIGHT9",
    Light10 = "LIGHT10",
    Dark1 = "DARK1",
    Dark2 = "DARK2",
    Dark3 = "DARK3",
    Dark4 = "DARK4",
    Dark5 = "DARK5",
    Dark6 = "DARK6",
    Dark7 = "DARK7",
    Dark8 = "DARK8",
    Dark9 = "DARK9",
    Dark10 = "DARK10",
    Grayscale = "GRAYSCALE",
    Negative = "NEGATIVE",
    Sepia = "SEPIA",
    Custom = "CUSTOM"
}
/**
 * A recolor effect applied on an image.
**/
export declare class Recolor extends SpeakeasyBase {
    name?: RecolorNameEnum;
    recolorStops?: ColorStop[];
}
