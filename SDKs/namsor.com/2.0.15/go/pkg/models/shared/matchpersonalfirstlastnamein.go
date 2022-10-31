package shared



type MatchPersonalFirstLastNameIn struct {
    ID *string `json:"id,omitempty"`
    Name1 *FirstLastNameIn `json:"name1,omitempty"`
    Name2 *PersonalNameIn `json:"name2,omitempty"`
    
}

