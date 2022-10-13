package shared

type MatchPersonalFirstLastNameIn struct {
	ID    *string          `json:"id"`
	Name1 *FirstLastNameIn `json:"name1"`
	Name2 *PersonalNameIn  `json:"name2"`
}
